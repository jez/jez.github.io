html := $(patsubst src/%.md,site/%.html,$(shell find src -name '*.md' -type f))

.PHONY: all
all: rm-r public $(html)

.PHONY: deploy
deploy:
	cd ./site
	git add -A
	git commit -m "Updated site - $$(date)"
	git push origin master

.PHONY: rm-r
rm-r:
	rm -rfv site/*

.PHONY: public
public:
	cp -rv public/* site

site/%.html: src/%.md
	mkdir -p "$$(dirname "$@")"
	pandoc -t html5 --template template.html "$<" -o "$@"
