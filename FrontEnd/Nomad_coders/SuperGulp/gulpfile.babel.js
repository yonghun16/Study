import gulp from "gulp";
import gpug from "gulp-pug";
import del from "del";
import image from 'gulp-image';

const routes = {
  pug: {
    src: "src/*.pug",
    dest: "build"
  },
  img: {
    src: "src/img/*",
    dest: "build/img"
  }
}

const pug = () => 
  gulp
  .src(routes.pug.src)
  .pipe(gpug())
  .pipe(gulp.dest(routes.pug.dest));

const clean = () => del(["build"]);

const img = () => gulp
  .src(routes.img.src)
  .pipe(image())
  .pipe(gulp.dest(routes.img.dest));

const prepare = gulp.series([clean, img]);

const assets  = gulp.series([pug]);

export const dev = gulp.series([prepare, assets]);

