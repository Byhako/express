# Request Object

El objeto `req` (Request) en Express representa el llamado HTTP y tiene diferentes propiedades del llamado, como la cadena de texto query (Query params), los parametros de la URL (URL params), el cuerpo (Body), los encabezados (HTTP headers), etc.

Para acceder al req basta con acceder al primer parametro de nuestros router handlers (router middleware) ó middlewares.

Como por ejemplo asi lo hemos visto siempre:

```
app.get('/user/:id', function(req, res) {
  res.send('user ' + req.params.id)
})
```

## Exploremos las propiedades más importantes

*req.body*

Contiene los pares de llave-valor de los datos enviandos el cuerpo (body) del llamado (request). Por defecto es undefined pero es establecido cuando se usa algun “body-parser” middleware como body-parser y multer.

En Postman cuando hacemos un request y enviamos datos en la pestaña Body, estos middlewares son los que nos ayudan a entender el tipo de datos que vamos a recibir en el req.body.

Aquí podemos ver como se pueden usar estos middlwares para establecer el valor del req.body:

```
const app = require('express')()
const bodyParser = require('body-parser')
const multer = require('multer')
const upload = multer() // Para datos tipo multipart/form-data

app.use(bodyParser.json()) // Para datos tipo application/json
app.use(bodyParser.urlencoded({ extended: true })) // Para datos tipo application/x-www-form-urlencoded

app.post('/profile', upload.array(), function (req, res, next) {
  console.log(req.body)
  res.json(req.body)
})

```

Más información sobre los diferentes formatos que puede tener el body: https://developer.mozilla.org/es/docs/Web/HTTP/Methods/POST

*req.params*

Esta propiedad contiene un objeto con las propiedades equivalentes los parametros nombrados en la ruta. Por ejemplo si tenemos una ruta de la forma /user/:name entonces la propiedad name esta disponible como req.params.name y alli podremos ver su valor, supongamos que llamaramos la ruta con /user/glrodasz, entonces el valor de req.params.name seria glrodasz. Este objeto por defecto tiene el valor de un objeto vacio {}.

```
// GET /user/glrodasz
req.params.name
// => "glrodasz"
```

*req.query*

Esta propiedad continene un objeto con las propiedades equivalentes a las cadenas de texto query de la ruta. Si no hay ninguna cadena de texto query tendra como valor por defecto un objeto vacio {}.

```
req.query.q
// => "tobi ferret"// GET /shoes?order=desc&shoe[color]=blue&shoe[type]=converse
req.query.order
// => "desc"

req.query.shoe.color
// => "blue"

req.query.shoe.type
// => "converse"
```

Más información sobre los query strings en: https://es.wikipedia.org/wiki/Query_string y https://tools.ietf.org/html/rfc3986#section-3.4
