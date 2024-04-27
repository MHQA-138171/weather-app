const path = require('path');
const express = require('express');
const { getWeatherByCity } = require('./controllers/httpGetWeatherByCity.controller')

const app = express();

app.use(express.static(path.join(__dirname, '..', 'client')));
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'client', 'index.html'))
})
app.get('/weather', getWeatherByCity)

app.listen(8000, () => {
    console.log("listening on 8000");
})