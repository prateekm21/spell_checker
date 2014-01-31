exports.routes = (map)->

  map.get  '/spell_checker/:word',  "spell#check_spelling"

