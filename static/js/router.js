define(['jquery', 'underscore', 'backbone', 'views/main'],
       function($, _, Backbone, mainView) {
    
    if (typeof String.prototype.startsWith != 'function') {
        String.prototype.startsWith = function(str) {
            return this.indexOf(str) == 0;
        };
    }
    
    var AppRouter = Backbone.Router.extend({
        routes: {
            // URL routes
            '': 'index',
            'index.html': 'index',
            'articles.html': 'articles',
            'portfolio.html': 'portfolio',
            'about-me.html': 'aboutme',
            // Other links
            '*actions': 'otherAction'
        },
        
        otherAction: function(actions) {
            document.location.href = actions;
        },
        
        defaultAction: function(href, sectionNum, sectionID, name) {
            mainView.render(href, sectionNum, sectionID, name);
        },
        
        index: function() {
            this.defaultAction('index.html', '1', 's-01', '');
        },
        
        articles: function() {
            this.defaultAction('articles.html', '2', 's-02', 'Articles');
        },
        
        portfolio: function() {
            this.defaultAction('portfolio.html', '3', 's-03', 'Portfolio');
        },
        
        aboutme: function() {
            this.defaultAction('about-me.html', '4', 's-04', 'About me');
        }
    });
    
    var initialize = function() {
        // TODO
        // Only issue here is that if you try to open a URL like:
        // /index.html#bottom <= works
        // /#bottom <= doesn't work (it's transformed to /bottom)
        var appRouter = new AppRouter();
        Backbone.history.start({pushState: true});
        
        // Intercepts all links clicked, then it changes the URL
        // in the address bar and finally prevents default behaviour
        // of the link (load new page).
        $('a').bind('click', function(event) {
            var href = $(this).attr('href');
            
            // External link
            if ($(this).attr('target')) {
                if (href)
                    window.open(href);
                return false;
            }
            
            // External link
            if ($(this).attr('data-fancybox')) {
                return true;
            }
            
            if (! href.startsWith('#')) {
                appRouter.navigate(href, true);
                event.preventDefault();
                return false;
            }
        });
        $('select').change(function() {
            var href = $(this).val();
            if (! href.startsWith('#')) {
                appRouter.navigate(href, true);
                event.preventDefault();
                return false;
            }
        });
    };
    
    return { 
        initialize: initialize
    };
});
