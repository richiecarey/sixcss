"use strict";

const { src, dest, watch, series, parallel } = require("gulp");
const sass = require("gulp-sass");
const server = require("browser-sync").create();

function serve() {
  server.init({
    server: {
      baseDir: "./docs",
    },
  });
}

function reload() {
  server.reload();
}

function compileSass(done) {
  src("docs/scss/**/*.scss")
    .pipe(sass().on("error", sass.logError))
    .pipe(dest("docs/css"))
    .pipe(reload);
  done();
}

function watchSass() {
  watch("docs/scss/**/*.scss", compileSass);
}

exports.default = parallel(watchSass, serve);
