import gulp from 'gulp';
import zip  from 'gulp-zip';
//import {build} from 'aurelia-cli';
//.pipe(build.bundle());

export default function zipDist() {
  return gulp.src('scripts/**/*')
    .pipe(zip('{4125FDB3-912D-406D-A2D9-E740B8B9F52C}.zip'))
    .pipe(gulp.dest('./zip/'));
}
