const express = require('express')
const newsRouter = express.Router()
const axios = require('axios')


newsRouter.get('', async(req, res) => {

    try {
        var url = 'https://newsapi.org/v2/top-headlines?' +
        'country=fr&' +
        'category=technology&' +
        'apiKey=47bdc96e56ff4441b525ac9aeffa24dd';
        const newsAPI = await axios.get(url)
        res.render('news', { data : newsAPI.data})
        console.log(newsAPI.data)
    } catch (error) {
        if(error.response){
            console.log(error)
        }

    }
})

module.exports = newsRouter