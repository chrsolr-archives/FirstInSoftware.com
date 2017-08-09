'use strict';

module.exports = (() => {
    const brand_title = 'First in Software';

    const paths = {
        ROOT: '.',
        SASS: `./src/sass/`,
        CSS: `./dist/css/`,
    };

    const css_nano_opts = {
        convertValues: false,
        discardComments: { removeAll: true },
        autoprefixer: false
    };

    return {
        paths,
        css_nano_opts
    }
})();