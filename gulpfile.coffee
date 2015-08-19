gulp         = require 'gulp'
del          = require 'del'

sass         = require 'gulp-sass'
autoprefixer = require 'gulp-autoprefixer'

jade         = require 'jade'
gulpJade     = require 'gulp-jade'

sourcemaps   = require 'gulp-sourcemaps'

paths =
  styles:
    src:  './sass/**/*.s{a,c}ss'
    dest: './site/css'
  jade:
    src:  './**/*.jade'
    md:   './**/*.md'
    dest: './site'
  pub:
    src:  './public/**/*'
    dest: './site'

styles = (devMode) ->
  result = gulp.src paths.styles.src

  if devMode
    result = result.pipe sourcemaps.init()

  # Compile and compress sass
  result = result
    .pipe sass outputStyle: 'compressed'
    .on 'error', sass.logError

  if devMode
    # Fake that the sourcemapped files came from /sass
    result = result.pipe sourcemaps.write sourceRoot: '/sass'

  result
    # Add CSS3 prefixes after sourcemaps so we get meaningful source mappings
    .pipe autoprefixer()
    .pipe gulp.dest(paths.styles.dest)

gulp.task 'styles',     -> styles false
gulp.task 'styles-dev', -> styles true

gulp.task 'jade', ->
  gulp.src paths.jade.src
    .pipe gulpJade jade: jade
    .pipe gulp.dest(paths.jade.dest)

# copy files in public folder into site folder
gulp.task 'public', ->
  gulp.src paths.pub.src
    .pipe gulp.dest(paths.pub.dest)

gulp.task 'watch', ['styles-dev', 'jade', 'public'], ->
  gulp.watch paths.styles.src, ['styles-dev']
  gulp.watch paths.jade.src,   ['jade']
  gulp.watch paths.jade.md,    ['jade']
  gulp.watch paths.pub.src,    ['public']
  null

gulp.task 'clean', (cb) ->
  # Delete all of site, but not the parent nor any dotfiles
  del ['./site/**', '!./site', '!./site/.*'], cb

gulp.task 'default', ->
  gulp.start 'jade', 'styles', 'public'
