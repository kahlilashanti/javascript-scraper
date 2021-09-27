const express = require('express');
const axios = require('axios');
const cheerio = require('cheerio');

const app = express();

const PORT = 5000;

const url = 'https://en.wikipedia.org/wiki/List_of_United_States_military_bases'


axios(url)
    .then(res => {
        const html = res.data
        // console.log(html)
        const $ = cheerio.load(html)
        const info = []

        $('.mw-editsection', html).each(function () {
            const title = $(this).text()
            const link = $(this).find('a').attr('href')
            info.push({
                title,
                link
            })
        })
        console.log(info)
    }).catch(err => console.log(err))





//server listening on port
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));