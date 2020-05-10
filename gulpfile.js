"use strict";
const { src, dest, watch } = require("gulp");
const sass = require("gulp-sass");
function compileSass(done) {
  src("docs/scss/**/*.scss")
    .pipe(sass().on("error", sass.logError))
    .pipe(dest("docs/css"));
  done();
}
function watchSass() {
  watch("docs/scss/**/*.scss", compileSass);
}
exports.watchSass = watchSass;
