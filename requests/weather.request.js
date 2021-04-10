 const rp = require('request-promise');

 module.exports = async function(city = '') {
    if (!city){
        throw new Error('Имя города не может быть пустым');
    }
    
    const KEY = '2a91eefe2cbbcf0d2ec03b5958d89750';
    const uri = 'https://api.openweathermap.org/data/2.5/weather';
    const options = {
        uri,
        qs: {
            appid: KEY,
            q: city,
            units: 'imperial'
        },
        json: true,
    }

    try{   
        const data = await rp(options);
        const celcius = (data.main.temp - 32) * 5/9;

        return {
            weather: `${data.name}: ${celcius.toFixed(0)}`,
            error: null
        }
    }
    catch(error){

        return {
            weather: null,
            error: error.error.message
        }
    }
}