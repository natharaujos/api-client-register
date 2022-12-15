
""" 
Cliente utilizado para listar todos os clientes 
cadastrados no banco de dados 
"""

import requests
import json

url = "http://localhost:3000/"

requests.post(url + 'cadastrar', {'prazoLimite': '06/12/22', 'descricao': 'tested', 'terminada': 'false'})
resposta = requests.get(url + "listar", verify="false")

if(resposta.ok):

    dadosRequisicao = json.loads(resposta.content)

    print("Foram encontrados {0} usuarios.".format(len(dadosRequisicao)))
    print("\n")
    for usuario in dadosRequisicao:
        for atributo in usuario:
            print (atributo + ": " + str(usuario[atributo]))
        print("\n")
else:
    resposta.raise_for_status()








