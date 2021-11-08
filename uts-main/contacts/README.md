
## 1. describir las interaciones que pasan en la app.

2 escenarios:

Pantalla normal y pantalla con la opción de editar el contacto:

- 2 campos para introducir información: 
 En uno de los campos se introduce texto para el nombre.
  En el otro campo se introduce texto para el teléfono.
-el boton add genera un nuevo contacto y lo añade a la lista
-el boton x borra un contacto de la lista
-el boton Edit deja ver el input inicial del nombre y teléfono para editarlo. 
- Cuando se ve la opción de editar el contacto sale un boton con el cual se pueden guardar los cambios.

-R:get: escribir lista de contactos del array en pantalla
-W:put: añadir nuevo contacto (name, teléfono, id)
-W:update: editar el contacto (id, name, teléfono)
-W:delete:borrar (id)

## 2. analizar el tipo de interaccion que hay basado en lo del API (database):

GET: operacion que solo lee los datos (READ)
PUT: operación que escribe una nueva entrada (WRITE) Cual es el dato a cambiar?
UPDATE: operación que actualiza una entrada (WRITE) Cual es el dato a cambiar?
DELETE: operación que quita una entrada (WRITE) Cual es el dato a cambiar?

Identificar en el interfaz todos los elementos de interacción del usuario e intentar mapearlas sobre estas 4 operaciones

