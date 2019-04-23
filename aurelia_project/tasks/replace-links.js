import gulp from 'gulp';
import replace  from 'gulp-string-replace';

export default function replaceLinks() {
  return gulp.src('dist/control/index.html')
    .pipe(replace('dist/control/', ''))
    .pipe(gulp.dest('dist/control'));
}
