"use strict";
const { src, dest, watch } = require("gulp");
const sass = require("gulp-sass");
function compileSass(done) {
  src("app/scss/**/*.scss")
    .pipe(sass().on("error", sass.logError))
    .pipe(dest("app/css"));
  done();
}
function watchSass() {
  watch("app/scss/**/*.scss", compileSass);
}
exports.watchSass = watchSass;
