const { database } = require("./config/database.config");
const express = require("express");
const { response, request, Router } = require("express");
const {Form, User, Analytics} = require("./models/users");
const bodyParser = require('body-parser');
const { noExtendLeft } = require("sequelize/types/lib/operators");  
const app = express();
const { database } = require("../config/database.config")
const Sequelize = require("sequelize")
const { Model, UUID } = require("sequelize")
import axios from 'axios';
import { format } from 'sequelize/types/lib/utils';

const porta = 3000;
app.listen(porta, () => {
    console.log("Server Started");
})

var list = []

// 

app.get('Amin/onLoad/countries', function(req, res) {  
    // send to Amin
    // Auslesen des JSON Objekts (projekt Discord)

    axios({
        // auf die url von Chris seiner DB res = JSON mit allen Ländern
        method: 'get',
        // 8081 müsste hier eigentlich noch weg 
        url: ':8081/onload/countries',
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
        url: ':8081/onload/properties',
        responseType: 'json'
    }).then(function (response) {
        const antwort = response
        res.send(antwort)
    });
   
});

app.post('/Amin/submit', bodypars, (req, res) => {

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
                url: ':5000/informations' + req.originalUrl
            }).then(function (response) {
                const antwort = response
            
                console.log(antwort)
            
                // speichern in der DB und zurück zu Amin 
            
                const save = Analytics.create(
                    { type_analytics: req.body.case, result: antwort },
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
                url: ':5000/informations' + req.originalUrl
            }).then(function (response) {
                const antwort = response
            
                console.log(antwort)
            
                // speichern in der DB 

                const save = Analytics.create(
                    { type_analytics: req.body.case, result: antwort },
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
                url: ':5000/statistics' + req.originalUrl
            }).then(function (response) {
                const antwort = response
        
                console.log(antwort)
        
                // speichern in der DB und zurück zu Amin 

                const save = Analytics.create(
                    { type_analytics: req.body.case, result: antwort },
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
                url: ':5000/predictions' + req.originalUrl
            }).then(function (response) {
                
                const antwort = response
            
                console.log(antwort)
            
                // speichern in der DB und zurück zu Amin 

                const save = Analytics.create(
                    { type_analytics: req.body.case, result: antwort },
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
                url: ':5000/predictions' + req.originalUrl
            }).then(function (response) {
                
                const antwort = response
            
                console.log(antwort)
            
                // speichern in der DB und zurück zu Amin 

                const save = Analytics.create(
                    { type_analytics: req.body.case, result: antwort },
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