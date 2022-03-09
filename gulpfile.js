const gulp = require("gulp");
const sass = require("gulp-sass")(require("sass"));

function test(done) {
  console.log("hello Gulp");  //処理の内容
  done();
}

function compileSass() {
  //元になるフォルダー src
  return gulp.src("./src/style.scss")
  //コンパイルの処理を記載する
  .pipe(sass())
  //出力先のフォルダー public
  .pipe(gulp.dest("./public"))//出力先のパス
}

exports.test = test;    //コマンドで実行  コマンドでnpx gulp test
exports.compileSass = compileSass;    //コマンドで実行  コマンドでnpx gulp test