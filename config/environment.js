// Generated by CoffeeScript 1.7.1
(function() {
  require('./globals');

  module.exports = function(compound) {
    var app, express;
    express = require('express');
    app = compound.app;
    return app.configure(function() {
      app.enable('coffee');
      app.set('cssEngine', 'stylus');
      compound.loadConfigs(__dirname);
      app.use(express["static"](app.root + '/public', {
        maxAge: 86400000
      }));
      app.use(express.bodyParser());
      app.use(express.cookieParser('secret'));
      app.use(express.session({
        secret: 'secret'
      }));
      app.use(express.methodOverride());
      return app.use(app.router);
    });
  };

}).call(this);
