// 获取 gulp 模块
var gulp = require('gulp')
// 获取 uglify 模块（用于压缩 JS）
var uglify = require('gulp-uglify')
// 获取 minify-css 模块（用于压缩 CSS）
var minifyCSS = require('gulp-minify-css')
// 压缩 js 文件
// 在命令行使用 gulp script 启动此任务
gulp.task('script', function() {
    gulp.src('js/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('dist/js'))
})



// 压缩 css 文件
// 在命令行使用 gulp css 启动此任务
gulp.task('css', function () {
    // 1. 找到文件
    gulp.src('css/*.css')
    // 2. 压缩文件
        .pipe(minifyCSS())
    // 3. 另存为压缩文件
        .pipe(gulp.dest('dist/css'))
})

// 自动压缩js
gulp.task('autoJs', function () {
    gulp.watch('js/*.js', ['script'])
})
// 自动压缩css
gulp.task('autoCss', function () {
    gulp.watch('css/*.css', ['css'])
})

// 自动监听
gulp.task('default', ['autoJs', 'autoCss'])