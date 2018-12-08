let mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

// mix.js('resources/assets/js/app.js', 'public/js')
//    .sass('resources/assets/sass/app.scss', 'public/css');

mix.copyDirectory('resources/assets/frontendtemplate/fonts', 'public/frontendtemplate/fonts');
mix.copyDirectory('resources/assets/frontendtemplate/css', 'public/frontendtemplate/css');
mix.copyDirectory('resources/assets/frontendtemplate/images', 'public/frontendtemplate/images');
mix.copyDirectory('resources/assets/frontendtemplate/images', 'public/frontendtemplate/images');
mix.copyDirectory('resources/assets/frontendtemplate/js', 'public/frontendtemplate/js');
mix.copyDirectory('resources/assets/frontendtemplate/js', 'public/frontendtemplate/js');
mix.copyDirectory('resources/assets/frontendtemplate/scss', 'public/frontendtemplate/scss');

mix.scripts([
    'resources/assets/backendtemplate/js/animations.js',
    'resources/assets/backendtemplate/js/charts-flot.js',
    'resources/assets/backendtemplate/js/charts-morris.js',
    'resources/assets/backendtemplate/js/code-helper.js',
    'resources/assets/backendtemplate/js/config.js',
    'resources/assets/backendtemplate/js/customize.js',
    'resources/assets/backendtemplate/js/editor.js',
    'resources/assets/backendtemplate/js/editor-helper.js',
    'resources/assets/backendtemplate/js/error.js',
    'resources/assets/backendtemplate/js/for-helper.js',
    'resources/assets/backendtemplate/js/history.js',
    'resources/assets/backendtemplate/js/input-groups.js',
    'resources/assets/backendtemplate/js/is-helper.js',
    'resources/assets/backendtemplate/js/item-editor.js',
    'resources/assets/backendtemplate/js/items.js',
    'resources/assets/backendtemplate/js/items-list.js',
    'resources/assets/backendtemplate/js/login.js',
    'resources/assets/backendtemplate/js/main.js',
    'resources/assets/backendtemplate/js/modal-media.js',
    'resources/assets/backendtemplate/js/nav.js',
    'resources/assets/backendtemplate/js/nprogress.js',
    'resources/assets/backendtemplate/js/reset.js',
    'resources/assets/backendtemplate/js/sales-breakdown.js',
    'resources/assets/backendtemplate/js/sales-by-countries.js',
    'resources/assets/backendtemplate/js/sameheight-items.js',
    'resources/assets/backendtemplate/js/sidebar.js',
    'resources/assets/backendtemplate/js/signup.js',
    'resources/assets/backendtemplate/js/tasks.js',
    'resources/assets/backendtemplate/js/times-helper.js',
], 'public/backendtemplate/js/library.js');

mix.styles([
    'resources/assets/backendtemplate/scss/_main.scss',
    'resources/assets/backendtemplate/scss/_mixins.scss',
    'resources/assets/backendtemplate/scss/_variables.scss',
    'resources/assets/backendtemplate/scss/app.scss',
    'resources/assets/backendtemplate/scss/auth.scss',
    'resources/assets/backendtemplate/scss/button.scss',
    'resources/assets/backendtemplate/scss/buttons.scss',
    'resources/assets/backendtemplate/scss/card.scss',
    'resources/assets/backendtemplate/scss/chart.scss',
    'resources/assets/backendtemplate/scss/charts-flot.scss',
    'resources/assets/backendtemplate/scss/collapse.scss',
    'resources/assets/backendtemplate/scss/customize.scss',
    'resources/assets/backendtemplate/scss/dashboard.scss',
    'resources/assets/backendtemplate/scss/dropdown.scss',
    'resources/assets/backendtemplate/scss/editor.scss',
    'resources/assets/backendtemplate/scss/error.scss',
    'resources/assets/backendtemplate/scss/flex.scss',
    'resources/assets/backendtemplate/scss/footer.scss',
    'resources/assets/backendtemplate/scss/form.scss',
    'resources/assets/backendtemplate/scss/header.scss',
    'resources/assets/backendtemplate/scss/images-container.scss',
    'resources/assets/backendtemplate/scss/item-editer.scss',
    'resources/assets/backendtemplate/scss/item-header.scss',
    'resources/assets/backendtemplate/scss/item-list.scss',
    'resources/assets/backendtemplate/scss/layout.scss',
    'resources/assets/backendtemplate/scss/logo.scss',
    'resources/assets/backendtemplate/scss/misc.scss',
    'resources/assets/backendtemplate/scss/model-media.scss',
    'resources/assets/backendtemplate/scss/models.scss',
    'resources/assets/backendtemplate/scss/model-tabs.scss',
    'resources/assets/backendtemplate/scss/nav.scss',
    'resources/assets/backendtemplate/scss/navigation.scss',
    'resources/assets/backendtemplate/scss/notification.scss',
    'resources/assets/backendtemplate/scss/nprogress.scss',
],'public/backendtemplate/sass/library.css');

mix.styles([
    'resources/assets/backendtemplate/scss/pagination.scss',
    'resources/assets/backendtemplate/scss/profile.scss',
    'resources/assets/backendtemplate/scss/responsive-tables.scss',
    'resources/assets/backendtemplate/scss/sales-breakdown.scss',
    'resources/assets/backendtemplate/scss/sales-by-countries.scss',
    'resources/assets/backendtemplate/scss/sameheight-items.scss',
    'resources/assets/backendtemplate/scss/screenful.scss',
    'resources/assets/backendtemplate/scss/scrollbar.scss',
    'resources/assets/backendtemplate/scss/search.scss',
    'resources/assets/backendtemplate/scss/sidebar.scss',
    'resources/assets/backendtemplate/scss/stats.scss',
    'resources/assets/backendtemplate/scss/table.scss',
    'resources/assets/backendtemplate/scss/tasks.scss',
    'resources/assets/backendtemplate/scss/typography.scss',
],'public/backendtemplate/sass/library.css');