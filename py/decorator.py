def p_decorate(func):
   def func_wrapper(name):
       return "<p>{0} </p>".format(func(name))
   return func_wrapper

#my_get_text = p_decorate(get_text)

@p_decorate
def get_text(name):
   return "lorem ipsum, {0} dolor sit amet".format(name)


print(get_text("John"))