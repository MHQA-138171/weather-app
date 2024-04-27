const { getWeatherData } = require('../models/getWeatherData')


async function getWeatherByCity(req, res) {
    const city = req.query.city
    const data = await getWeatherData(city);
    if (data['statusCode'] !== 200) {
        res.status(data['statusCode']).json(data['error'])
    }
    else {
        res.status(200).json(data['weatherData'])
    }
}

module.exports = {
    getWeatherByCity,
}