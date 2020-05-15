var gulp = require("gulp");
var browserSync = require("browser-sync").create();
var sass = require("gulp-sass");

function serve(done) {
  browserSync.init({
    watch: true,
    server: "./docs",
  });
  done();
}

function styles() {
  return gulp
    .src("docs/scss/**/*.scss")
    .pipe(sass())
    .on("error", sass.logError)
    .pipe(gulp.dest("docs/css"))
    .pipe(browserSync.stream());
}

function watch() {
  gulp.watch("docs/scss/**/*.scss", styles);
  gulp.watch("docs/*.html").on("change", browserSync.reload);
}

gulp.task("default", gulp.series(serve, styles, watch));
