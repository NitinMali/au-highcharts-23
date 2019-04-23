import gulp from 'gulp';
import cleanCSS  from 'gulp-clean-css';
import concat from 'gulp-concat';

export default function minCSS() {
  return gulp.src('src/styles/*.css')
    .pipe(concat('style.min.css'))
    .pipe(cleanCSS())
    .pipe(gulp.dest('dist/control/css'));
}
