define(function() {

    var config = {
        paths: {
            FAOSTAT_UI_STANDARDS_CLASSIFICATIONS: 'faostat-ui-standards-classifications',
            faostat_ui_standards_classifications: '../'
        },
        shim: {
            bootstrap: {
                deps: ['jquery']
            }
        }
    };

    return config;

});