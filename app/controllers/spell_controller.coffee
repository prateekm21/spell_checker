SpellChecker = models.MySpellChecker

action 'check_spelling', () ->
  sc = new SpellChecker(req.params.word)
  sc.check (error , response) ->
    return send(200, response)