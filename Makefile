all:
	@echo "Please choose one of 'install', 'jade', or 'compass', 'coffee', or 'serve'."

install:
	gem install bundler
	bundle install

jade:
	jade --watch .

compass:
	compass watch

coffee:
	coffee --watch --compile --output javascripts/ coffee/

serve:
	@if which python3; then python3 -m http.server; else python -m SimpleHTTPServer; fi


.PHONY: all install serve build compass coffee

