const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const PORT = 4000;
const Parse = require('parse/node');

Parse.initialize("gG1E4WLzfDkmPNjOAhCb8N80oKeeWwBIMaeVvi73","MuPjVx6UjWvkbNvlQHY1X0M4ZHuZTledABmMuEnY");
Parse.serverURL = 'https://parseapi.back4app.com/'

const Startup = Parse.Object.extend("Startup");

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
        res.send(results)
    }).catch(error => {
        res.send(error)
    })
})

app.listen(PORT, function() {
    console.log("Server is running on Port: " + PORT);
});

