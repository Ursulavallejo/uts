Como hacer un analisis del proyecto:

## 1. describir las interaciones que pasan en la app.

-en el campo se introduce texto para el todo
-el boton add genera un nuevo todo y lo añade a la lista
-el boton x borra un todo de la lista
-el checkbox cambia la propiedad "done"

-R:get: escribir lista de todos en pantalla
-W:put: añadir nuevo todo (texto, id, done)
-W:update: "tachar" un todo (id, done)
-W:delete:borrar (id)

## 2. analizar el tipo de interaccion que hay basado en lo del API (database):

GET: operacion que solo lee los datos (READ)
PUT: operación que escribe una nueva entrada (WRITE) Cual es el dato a cambiar?
UPDATE: operación que actualiza una entrada (WRITE) Cual es el dato a cambiar?
DELETE: operación que quita una entrada (WRITE) Cual es el dato a cambiar?

Identificar en el interfaz todos los elementos de interacción del usuario e intentar mapearlas sobre estas 4 operaciones

