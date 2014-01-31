// Generated by CoffeeScript 1.7.1
(function() {
  var MySpellChecker, SpellCheck, base;

  SpellCheck = require('spellcheck');

  base = __dirname + '/../../lib/';

  MySpellChecker = (function() {
    function MySpellChecker(word) {
      this.word = word;
      this.klass = "MySpellChecker";
    }

    MySpellChecker.prototype.check = function(cb) {
      var spell;
      logger.info("Checking Spelling", this.word);
      spell = new SpellCheck(base + 'en_US.aff', base + 'en_US.dic');
      return spell.check(this.word, function(err, correct, suggestions) {
        if (err) {
          throw err;
        }
        if (correct) {
          return cb(void 0, {
            result: "Word is spelled correctly!"
          });
        } else {
          return cb(void 0, {
            result: "Word not recognized. Suggestions: " + suggestions
          });
        }
      });
    };

    return MySpellChecker;

  })();

  module.exports = function(compound) {
    return logger.debug("define MySpellChecker");
  };

  module.exports = MySpellChecker;

}).call(this);
