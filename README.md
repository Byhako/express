# express

npm i express-generator -g

express --view=pug {name-directory-app}

```
DEBUG=commerce:* npm start
NODE_ENV=production npm starts
```

## Template Engine

app.engine('ext', function(filePath, options, callback) {})

app.set('views', './views')  --> Specify the views directory

app.set('view engine', 'ext')  --> Register the template engine


