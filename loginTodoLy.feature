Feature: Login de todo.ly

Scenario: Login exitoso
Given Existe el usuario "augusto lopez" en la db

When Comlpeto el campo Email con el valor "augustolopez987@mailinator.com"
And Completo el campo Contraseña con la Contraseña del usuario "augusto lopez" que es "augusto"
And Presion Login

Then La app me lleva al home


Scenario: Login sin contraseña
Given Existe el usuario "augusto lopez" en la db

When Comlpeto el campo Email con el valor "augustolopez987@mailinator.com"
And Dejo en blanco el campo Contraseña
And Presion Login

Then No me deberia logear
And Mensaje pop up deberia aparecer diciendo "Error: email o contraseña incorrecta"


Scenario: Login con cuenta inexistente
Given No existe el usuario "nybble159" en la db

When Comlpeto el campo Email con el valor "nybble159@nybble.com"
And Completo el campo contraseña con "Nybble"
And Presion Login

Then No me deberia logear
And Mensaje pop up deberia aparecer diciendo "Error: email o contraseña incorrecta"


Scenario: Login con email mal escrito
Given Existe el usuario "augusto lopez" en la db

When Comlpeto el campo Email con el valor "augustolopez987" sin la parte del @...
And Completo el campo Contraseña con la Contraseña del usuario "augusto lopez" que es "augusto"
And Presion Login

Then No me deberia logear
And Mensaje pop up deberia aparecer diciendo "Error: email o contraseña incorrecta"

