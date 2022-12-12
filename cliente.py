
""" 
Cliente utilizado para listar todas as tarefas 
cadastradas no banco de dados 

"""


import requests
import json

url = "https://trabalho-pratico-2.herokuapp.com/"

myResponse = requests.get(url + "listar")

if(myResponse.ok):

    jData = json.loads(myResponse.content)

    print("Foram encontrados {0} tarefas.".format(len(jData)))
    print("\n")
    for tarefa in jData:
        for atributo in tarefa:
            print (atributo + ": " + str(tarefa[atributo]))
        print("\n")
else:
# If response code is not ok (200), print the resulting http error code with description
    myResponse.raise_for_status()








