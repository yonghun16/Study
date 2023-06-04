import gulp from "gulp";
import gpug from "gulp-pug";
import del from "del";
import image from "gulp-image";
import ws from "gulp-webserver";

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
  gulp.src(routes.pug.src)
  .pipe(gpug())
  .pipe(gulp.dest(routes.pug.dest));

const webserver = () =>
  gulp.src("build")
  .pipe(ws({livereload:true, open:true}))

const clean = () => 
  del(["build/"]);

const img = () => 
  gulp .src(routes.img.src)
  .pipe(image())
  .pipe(gulp.dest(routes.img.dest));

const prepare = gulp.series([clean, img]);

const assets  = gulp.series([pug]);

const postDev = gulp.series([webserver]);

export const dev = gulp.series([prepare, assets, postDev]);

