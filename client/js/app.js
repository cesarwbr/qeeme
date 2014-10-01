require.config({
  paths: {
    'jquery': '../libs/jquery/dist/jquery',
    'underscore': '../libs/underscore/underscore',
    'backbone': '../libs/backbone/backbone',
    'handlebars': '../libs/handlebars/handlebars'
  }
});

require(['views/app'], function(AppView){
  new AppView;
});
