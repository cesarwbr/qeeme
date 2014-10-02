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

require(['views/app', 'font!google,families:[Roboto,Pacifico]', 'font!custom,families: [qeeme],urls:[css/fonts.css]'], function(AppView) {
  new AppView;
});
