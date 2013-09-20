SpellCheck = require('spellcheck')
base       = __dirname + '/../../lib/'

class MySpellChecker
  constructor: (@word) ->
    @klass = "MySpellChecker"
  
  check: (cb) ->
    logger.info "Checking Spelling", @word
    spell      = new SpellCheck(base + 'en_US.aff', base + 'en_US.dic')
    spell.check @word, (err, correct, suggestions) ->
      throw err  if err
      if correct
        cb(undefined, {result: "Word is spelled correctly!"})
      else
        cb(undefined, {result: "Word not recognized. Suggestions: #{suggestions}"})


module.exports = (compound) ->
  logger.debug "define MySpellChecker"


module.exports = MySpellChecker    
    