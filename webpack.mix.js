let mix = require('laravel-mix');

mix.setPublicPath('public')
    .js('src/js/app.js', 'public/assets/js/app.js')
    .sass('src/sass/app.scss', 'public/assets/css/app.css')
    .copy('src/images', 'public/assets/images')
    .browserSync('squad-randomizer.test')
    .options({
        processCssUrls: false
    })
