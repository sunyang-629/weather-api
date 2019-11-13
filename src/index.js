const express = require('express');
const axios = require('axios');

const app = express();

app.get('/',(req,res) => {
    res.send(`welcome`);
});

app.get('/api/weather',(req,res) => {
    const{cc,city} = req.query;
    axios.get( `https://api.openweathermap.org/data/2.5/weather?q=${city},${cc}&appid=4c4a824387562138724ba3f653cb1424`).then(response => {
        res.send(response.data);
    }).catch(err => console.log(err));
});

app.listen(3000,() => {
    console.log('server has started at port 3000')
})