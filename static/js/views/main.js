define(['jquery', 'underscore', 'backbone'],
       function($, _, Backbone) {
    var mainView = Backbone.View.extend({
        el: $('#content'),
        
        render: function(href, sectionNum, sectionID, name) {
            $('section:not(.invisible)').addClass('invisible');
            $('#' + sectionID).removeClass('invisible');
            $('#menu-sprite').removeClass();
            $('#menu-sprite').addClass('sprite-' + sectionNum);
            $('#menu-list a.active').removeClass();
            $('#menu-list a[href="' + href + '"]').addClass('active');
            
            var circle = $('#circle').children('div');
            var circleTxt = '0' + sectionNum + '.';
            if ($(circle).text() != circleTxt) {
                $(circle).css('margin-top', '-60px');
                setTimeout(function() {
                    $(circle).text(circleTxt);
                    $(circle).css('margin-top', '0px');
                }, 500);
            }
            
            // Change document title
            if (name == '')
                document.title = 'Rafa Muñoz';
            else
                document.title = name + ' - Rafa Muñoz';
        }
    });
    
    return new mainView();
});
