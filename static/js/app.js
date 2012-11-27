define(['jquery', 'router', 'fancybox'], function($, Router) {
    var loadSections = function(sectionID) {
        $.get('templates/sections.html', function(template) {
            // http://stackoverflow.com/questions/1050333/
            var $template = $("<div>").html(template);
            $template.children("#" + sectionID).remove();
            $('#content').append($template);
        });

        $("a.fancybox").fancybox({
            'loop': false,
            'openEffect': 'none',
            'closeEffect': 'none',
            'nextEffect': 'none',
            'prevEffect': 'none',
            'hideOnContentClick': true
        });
    };
    
    var initialize = function(sectionID) {
        loadSections(sectionID);
        Router.initialize();
    };
    
    return { 
        initialize: initialize
    };
});
