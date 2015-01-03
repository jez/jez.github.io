all:
	@echo "Please choose one of 'install', 'build', or 'serve'."

install:
	gem install bundler
	bundle install

build:
	jade --watch . &
	compass watch

serve:
	if which python3; then python3 -m http.server; else python -m SimpleHTTPServer; fi


.PHONY: all serve build

