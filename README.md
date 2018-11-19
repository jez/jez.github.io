# jez.io

My personal site, written in Markdown, compiled with Pandoc, and served over
GitHub Pages.

This is the source branch. For the compiled output, see `master`.

## Developing

These setup instructions are for developing on macOS.

```shell
# Install the build tools
brew bundle

# Set up the site/ folder
git clone -b master https://github.com/jez/jez.github.io ./site

# Build the site
make

# Build on file changes
watchman-make -p 'src/**/*.md' 'public/**' template.html -t all

# Preview the site
cd site && python3 -m http.server &> /dev/null &

# Deploy
make deploy
```

## License

MIT License. See LICENSE.
