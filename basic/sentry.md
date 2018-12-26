Para empezar a usar Sentry lo primero que debemos hacer es crear una cuenta usando el link https://sentry.io/signup/. Para agilizar este paso recomiendo que usen su cuenta de GitHub como metodo de inscripción y sigan los pasos.

Al ingresar al dashboard de Sentry lo que podemos hacer es ir directamente onboarding haciendo click en la alerta amarilla que aparece en la parte superior o mediante el link https://sentry.io/onboarding/<organización>/.

Allí nos pedira que seleccionemos un lenguage y un team, para el lenguaje seleccionaremos Server > Node.js le daremos un nombre al proyecto dejaremos el team que tiene por defecto y a continuación haremos click en Create Project.

Despues de ello nos entregara unas instrucciones para configurar Sentry. Lo que haremos es instalar la dependencia de Sentry e inicializar su configuración en el archivo /utils/middlewares/errorsHandlers.js.

Recordemos que no debemos dejar ninguna key, secret o identificador quemado en nuestro codigo por lo que la recomendación es moverlo a variables de entorno y configuracion usando el archivo .env.

```
// .env.example y .env

SENTRY_DNS=
SENTRY_ID=
// config/index.jsrequire("dotenv").config();

const config = {
  sentryDns: process.env.SENTRY_DNS,
  sentryId: process.env.SENTRY_ID
};

module.exports = { config: config };
// utils/middlewares/errorsHandlers.jsconst Sentry = require("@sentry/node");
const { config } = require("../../config");

Sentry.init({ dsn: `https://${config.sentryDns}@sentry.io/${config.sentryId}` });
```

Y dentro de nuestro middleware logErrors agregramos el capturador de errores de Sentry:

```
// utils/middlewares/errorsHandlers.jsfunctionlogErrors(err, req, res, next) {
  Sentry.captureException(err);
  console.error(err.stack);
  next(err);
}
```

Le damos click en All done! y nos reenviara al dashboard dónde podremos monitorear los errores que ocurren en nuestra aplicación.

De esta manera cualquier error que ocurra en nuestra aplicación desplegada en producción estará registrado en Sentry y podremos revisarlos y corregirlos proactivamente.

Si quieres obtener más información sobre cómo capturar eventos y mensajes manualmente puedes consultarlo aquí https://docs.sentry.io/error-reporting/capturing/?platform=node