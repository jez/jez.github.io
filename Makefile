all:
	@echo "make build      Build the site once, into the site/ folder."
	@echo "make watch      Build into the site/ folder whenever files change."
	@echo "make serve      Serve the site/ folder on http://0.0.0.0:8000"
	@echo "make deploy     Deploy whatever is in the site/ folder"

html := $(patsubst src/%.md,site/%.html,$(shell find src -name '*.md' -type f))

.PHONY: build
build: rm-r public $(html)

.PHONY: deploy
deploy:
	cd ./site && git add -A && git commit -m "Updated site - $$(date)" && git push origin master

.PHONY: watch
watch:
	watchman-make -p 'src/**/*.md' 'public/**' template.html -t build

.PHONY: serve
serve:
	cd ./site && python3 -m http.server

# TODO(jez) I don't know how to ensure that removing a file from src/ or
# public/ will remove it from the site/ folder without wiping the folder
# before every build.
.PHONY: rm-r
rm-r:
	rm -rfv site/*

.PHONY: public
public:
	cp -rv public/* site

site/%.html: src/%.md
	mkdir -p "$$(dirname "$@")"
	pandoc -t html5 --template template.html "$<" -o "$@"
