// Generated by CoffeeScript 1.7.1
(function() {
  module.exports = function(compound) {
    var app;
    app = compound.app;
    return app.configure('production', function() {
      app.enable('merge javascripts');
      app.enable('merge stylesheets');
      app.disable('assets timestamps');
      app.use(require('express').errorHandler());
      return app.enable('quiet');
    });
  };

}).call(this);
