import gulp from 'gulp';
import replace  from 'gulp-string-replace';

export default function replaceLinks() {
  return gulp.src('scripts/control/index.html')
    .pipe(replace('/scripts/control/', ''))
    .pipe(gulp.dest('scripts/control'));
}
