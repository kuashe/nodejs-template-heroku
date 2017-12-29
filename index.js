var app = require('express')()

app.get('/', function(req , res) {
    res.end('Hello World')
})

app.listen( process.env.PORT || 8080 , () => console.log('App is running')) 

