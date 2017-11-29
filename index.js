const express = require('express');
const app = express();

app.set('port', 3000);

app.use(express.static(__dirname + '/public'));

app.get('/', function(request, response) {
    response.render('pages/index');
})

app.listen(3000, function() {
    console.log('Connected on 3000');
})