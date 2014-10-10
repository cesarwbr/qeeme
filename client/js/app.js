require.config({
  paths: {
    'jquery': '../libs/jquery/dist/jquery',
    'underscore': '../libs/underscore/underscore',
    'backbone': '../libs/backbone/backbone',
    'handlebars': '../libs/handlebars/handlebars',
    'font': '../libs/requirejs-plugins/src/font',
    'propertyParser': '../libs/requirejs-plugins/src/propertyParser'
  }
});

require(['backbone', 'helper', 'router', 'font!google,families:[Roboto,Pacifico]',
  'font!custom,families: [qeeme],urls:[css/fonts.css]'
], function(Backbone, Helper, Router) {

  new Router();
  
  Backbone.history.start();
  Helper.deviceOrientation(function() {
    Backbone.history.start();
  });
});
