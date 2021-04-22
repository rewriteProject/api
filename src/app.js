const express = require("express");
const { Analytics } = require("./models/analytics");
const app = express();
const axios = require('axios');

const server_port = process.env.SERVER_PORT;
const chris_port = process.env.CHRIS_PORT;
const chris_host = process.env.CHRIS_HOST;
const lisa_port = process.env.LISA_PORT;
const lisa_host = process.env.LISA_HOST;

var list = [];

app.get('Amin/onLoad/countries', function(req, res) {  
    // send to Amin
    // Auslesen des JSON Objekts (projekt Discord)

    axios({
        // auf die url von Chris seiner DB res = JSON mit allen Ländern
        method: 'get',
        // 8081 müsste hier eigentlich noch weg 
        url: chris_host + ':' + chris_port + '/onload/countries',
        responseType: 'json'
    }).then(function (response) {
        const antwort = response
        res.send(antwort)
    });
});


app.get('Amin/onLoad/properties', function(req, res) {
    // send to Amin
    // Auslesen des JSON Objekts (projekt Discord)
    axios({
        method: 'get',
        // 8081 müsste hier eigentlich noch weg 
        url: chris_host + ':' + chris_port + '/onload/properties',
        responseType: 'json'
    }).then(function (response) {
        const antwort = response
        res.send(antwort)
    });
   
});

app.post('/Amin/submit', (req, res) => {

    try {
        
        // Case ist nicht erlaubt als Variablen Name 

        const type = req.body.infotype;
        const country = req.body.country;
        const timefrom = req.body.timefrom;
        const timeto = req.body.timeto;
        const merkmal = req.body.merkmal;

        // get URL
        const test = req.protocol + '://' + req.get('host') + req.originalUrl;


        if(req.body.case == "I1"){
            list.push(type)
            list.push(country)
            list.push(url)

            axios({
                method: 'get',
                // 8081 müsste hier eigentlich noch weg 
                url: lisa_host + ':' + lisa_port + '/informations' + req.originalUrl
            }).then(function (response) {
                const antwort = response
            
                console.log(antwort)
            
                // speichern in der DB und zurück zu Amin 
            
                const save = Analytics.create(
                    { id_user: 1, type_analytics: req.body.case, result: antwort },
                )

                res.send(antwort)
            });
        }

        if(req.body.case == "I2"){
            list.push(type)
            list.push(country)
            list.push(test)

            axios({
                method: 'get',
                url: lisa_host + ':' + lisa_port + '/informations' + req.originalUrl
            }).then(function (response) {
                const antwort = response
            
                console.log(antwort)
            
                // speichern in der DB 

                const save = Analytics.create(
                    { id_user: 1, type_analytics: req.body.case, result: antwort },
                )
            
                res.send(antwort)
            });
        }

        if(req.body.case == "S1"){
           list.push(type)
           list.push(country)
           list.push(timefrom)
           list.push(timeto)
           list.push(merkmal)
           list.push(test)

           axios({
                method: 'get',
                // 8081 müsste hier eigentlich noch weg 
                url: lisa_host + ':' + lisa_port + '/statistics' + req.originalUrl
            }).then(function (response) {
                const antwort = response
        
                console.log(antwort)
        
                // speichern in der DB und zurück zu Amin 

                const save = Analytics.create(
                    {id_user: 1, type_analytics: req.body.case, result: antwort },
                )
        
                res.send(antwort)
            });
        }

        if(req.body.case == "P1"){
            list.push(type)
            list.push(country)
            list.push(test)

            axios({
                method: 'get',
                // 8081 müsste hier eigentlich noch weg 
                url: lisa_host + ':' + lisa_port + '/predictions' + req.originalUrl
            }).then(function (response) {
                
                const antwort = response
            
                console.log(antwort)
            
                // speichern in der DB und zurück zu Amin 

                const save = Analytics.create(
                    { id_user: 1, type_analytics: req.body.case, result: antwort },
                )
            
                res.send(antwort)
            });
        }
        
        if(req.body.case == "P2"){
            list.push(type)
            list.push(country)
            const category = req.body.category
            list.push(category)
            list.push(test)

            axios({
                method: 'get',
                // 8081 müsste hier eigentlich noch weg 
                url: lisa_host + ':' + lisa_port + '/predictions' + req.originalUrl
            }).then(function (response) {
                
                const antwort = response
            
                console.log(antwort)
            
                // speichern in der DB und zurück zu Amin 

                const save = Analytics.create(
                    { id_user: 1, type_analytics: req.body.case, result: antwort },
                )
            
                res.send(antwort)
            });
        }

    } catch (error) {
        res.status(500).send(error)
    }
});

// Testing Area 

// Um die Absolute Url zusammen zu bauen 
// protocol = holt das Protocol 
// originalUrl = alles was nach dem Website Link kommt

// Url speichern 
// const url = req.protocol + '://' + req.get('host') + req.originalUrl;

// Letzte UUID finden die erstellt wurde und rausholen (Zwecks Weiterverarbeitung)
// Form.find oder
//const id = Form.getDataValue(uuid)
//console.log(id)

app.listen(server_port, () => {
    console.log("Server Started");
})