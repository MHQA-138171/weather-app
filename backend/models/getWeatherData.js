const axios = require('axios');
require('dotenv').config();

async function getWeatherData(city) {
    const API_KEY = process.env.API_KEY;
    const WEATHER_URL = `http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${API_KEY}&units=Metric`
    try {
        const response = await axios.get(WEATHER_URL);
        const data = response.data;
        const weatherData = {
            city,
            'temp': data['main']['temp'],
            'weather': {
                'main': data['weather'][0]['main'],
                'description': data['weather'][0]['description'],
                'icon': data['weather'][0]['icon']
            }
        }
        return {
            weatherData,
            'statusCode': 200
        }
    }
    catch (error) {
        if (!error.response) {
            return {
                'statusCode': 400,
                'error': 'internet connectivity problem'
            }
        }

        return {
            'statusCode': error.response.status,
            'error': 'error occured'
        }
    }
}
module.exports = {
    getWeatherData,
}