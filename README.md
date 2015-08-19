# jez.io

My personal site, written in Jade, Sass, and Markdown, served over GitHub Pages.

This is the source branch. For the compiled output, see `master`.

## Developing

We're using `npm` to manage the development environment for this project, so
make sure you've got a working Node installation.

```
# Install all the dependencies
npm install

# Start the development server
npm start

# Compile everything
npm run build

# Watch everything
npm run watch

# -- see the gulpfile and the package.json for more commands --
```

## Deploying

This part is really cool. The gulpfile by default writes the compiled site to
`./site`, and we're going to abuse this for profit. This is basically what
Octopress does. First, to set up:

```
# clone into ./site and checkout the master branch
git clone -b master https://github.com/jez/jez.github.io ./site
```

Then, to deploy:

```
cd ./site && git commit -am "Updated site" && git push origin master && cd -
```

Whoaaa!!! Amazing!


## License

MIT License. See LICENSE.
