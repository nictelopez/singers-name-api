const express = require('express')
const app = express()
const PORT = 3000

const singers ={
    'harry styles' : {
        'age': 29,
        'birthName': 'Harry Edward Styles',
        'birthLocation': 'Redditch, England',
    },
    'dua lipa' : {
        'age': 27,
        'birthName': 'Dua Lipa',
        'birthLocation': 'London, England',
    },
    'katy' : {
        'age': 27,
        'birthName': 'Katy',
        'birthLocation': 'Katy',
    },
}

app.get('/', (request, response) => {
    response.sendFile(__dirname + '/index.html')
})

app.get('/api/:singerName', (request, response) => {
    const singersName = request.params.singerName.toLowerCase()
    if (singers[singersName]){
        response.json(singers[singersName])
    } else {
        response.json(singers['katy'])
    }
})

app.listen(PORT, () => {
    console.log( `The server is running on ${PORT}! You better go catch it! `)
})