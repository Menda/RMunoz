require.config({
    paths: {
        jquery: 'lib/jquery-1.8.3.min',
        underscore: 'lib/underscore-min',
        backbone: 'lib/backbone-optamd3-min',
        fancybox: 'lib/jquery.fancybox.pack'
    }
});

require(['jquery', 'app'], function($, App) {
    App.initialize('s-02');
});
