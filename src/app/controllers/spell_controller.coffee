SpellChecker = models.MySpellChecker

action 'check_spelling', () ->
  return send(422, error: "Only letters are accepted") unless /^[A-Za-z]+$/.test(req.params.word)  
  sc = new SpellChecker(req.params.word)
  sc.check (error , response) ->
    return send(200, response)