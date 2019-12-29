const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const routes = express.Router();
const PORT = 4000;
const mongoose = require('mongoose')
const Parse = require('parse/node');

Parse.initialize("gG1E4WLzfDkmPNjOAhCb8N80oKeeWwBIMaeVvi73","MuPjVx6UjWvkbNvlQHY1X0M4ZHuZTledABmMuEnY");
Parse.serverURL = 'https://parseapi.back4app.com/'

const Startup = Parse.Object.extend("Startup");
// const startup = new StartupClass();

app.use(cors());
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send('Server Running')
})
app.get('/startups', (req, res) => {
    query = new Parse.Query(Startup);
    query.equalTo("isPublic", true);
    query.find().then(results => {
        results = results.map(x => x.toJSON())
        results.forEach(element => {
            element.colorLogo = element.colorLogo.url
        });
        console.log(results)
        res.send(results)
    }).catch(error => {
        res.send(error)
    })
})

app.listen(PORT, function() {
    console.log("Server is running on Port: " + PORT);
});

