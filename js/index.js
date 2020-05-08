require.config({
    paths: {
        'angular': '../lib/angular/angular',
        'jquery': '../lib/jquery/dist/jquery.min',
        'jqgrid': '../lib/jqgrid/js/jquery.jqGrid.min'
    },

    /**
     * for libs that either do not support AMD out of the box, or
     * require some fine tuning to dependency mgt'
     */
    shim: {
        'angular': {
            exports: 'angular'
        },
        'jqgrid': {
            deps: ['jquery']
        }
    },
    deps: [
        // kick start application... see bootstrap.js
        './bootstrap'
    ]
});