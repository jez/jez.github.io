# jez.io

My personal site, written in Markdown, compiled with Pandoc, and served over
GitHub Pages.

This is the source branch. For the compiled output, see `master`.

## Developing

These setup instructions are for developing on macOS.

First time setup:

```shell
# Install the build tools
brew bundle

# Set up the site/ folder
git clone -b master https://github.com/jez/jez.github.io ./site
```

Development commands:

```bash
# Build the site
make build

# Build if files change
make watch

# Preview the site on http://0.0.0.0:8000
make serve

# Deploy
make deploy

# Favicon sources are in Sketch.
# Export from Sketch into public/img/ to update.
# To update generated ICO file:
make public/favicon.ico
```

## License

MIT License. See LICENSE.
