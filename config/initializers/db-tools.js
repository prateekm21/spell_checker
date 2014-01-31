// Generated by CoffeeScript 1.7.1
(function() {
  module.exports = function(compound) {
    var app, getUniqueSchemas, perform;
    app = compound.app;
    compound.tools.database = function() {
      var action;
      action = process.argv[3];
      switch (action) {
        case 'migrate':
        case 'update':
          return perform(action, process.exit);
        default:
          return console.log('Unknown action', action);
      }
    };
    compound.tools.database.help = {
      shortcut: 'db',
      usage: 'db [migrate|update]',
      description: 'Migrate or update database(s)'
    };
    getUniqueSchemas = function() {
      var schemas;
      schemas = [];
      Object.keys(compound.models).forEach(function(modelName) {
        var Model, schema;
        Model = compound.models[modelName];
        schema = Model.schema;
        if (!~schemas.indexOf(schema)) {
          return schemas.push(schema);
        }
      });
      return schemas;
    };
    return perform = function(action, callback) {
      var done, wait;
      wait = 0;
      done = function() {
        if (--wait === 0) {
          return callback();
        }
      };
      console.log('Perform', action, 'on');
      getUniqueSchemas().forEach(function(schema) {
        console.log(' - ' + schema.name);
        if (schema['auto' + action]) {
          wait += 1;
          return process.nextTick(function() {
            return schema['auto' + action](done);
          });
        }
      });
      if (wait === 0) {
        done();
      } else {
        console.log(wait);
      }
      return true;
    };
  };

}).call(this);