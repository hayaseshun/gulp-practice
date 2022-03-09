const gulp = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const postcss = require("gulp-postcss");
const autoprefixer = require("autoprefixer");
const cssSorter = require("css-declaration-sorter");
const mmq = require("gulp-merge-media-queries");

function test(done) {
  console.log("hello Gulp");  //処理の内容
  done();
}

function compileSass() {
  //元になるフォルダー src
  return gulp.src("./src/**/*.scss")
  //コンパイルの処理を記載する
  .pipe(sass())
  .pipe(postcss([autoprefixer(), cssSorter()])) 
  .pipe(mmq())
  //出力先のフォルダー public
  .pipe(gulp.dest("./public"))//出力先のパス
}

exports.test = test;    //コマンドで実行  コマンドでnpx gulp test
exports.compileSass = compileSass;    //コマンドで実行  コマンドでnpx gulp test