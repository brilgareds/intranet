/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
//
//const express = require('express');
//const app = express();
//var intravenous = require('intravenous');
//var modulos = require('./api/');
//var nodemailer = require('nodemailer');
//var date_utils = require('date-utils');
//
//G = {};
//G.ip = require('ip');
//G.dirname = __dirname;
//G.settings = require('./lib/Settings').create();
//
//var container = intravenous.create();
//var server = app.listen(G.settings.server_port);
//var io = require('socket.io').listen(server);
//
//var cluster = require('cluster'),
//        RedisStore = require("socket.io-redis"),
//        redis = require("redis"),
//        pub = redis.createClient(6379, "localhost", {return_buffers: true}),
//        sub = redis.createClient(6379, "localhost", {return_buffers: true}),
//        client = redis.createClient();
//G.redis = client;
//
/////////////////////
//    var cluster = require('cluster');
//    var http = require('http');
//    var numCPUs = require('os').cpus().length;
//
// var redisOptions = {
//        pubClient: pub,
//        subClient: sub,
//        host: "redis://localhost",
//        port: 6379
//    };
//
//io.adapter(RedisStore(redisOptions));
//
//container.register("emails", nodemailer);
//container.register("date_utils", date_utils);
//modulos.cargarRoutes(app, container, io);
//
//var redisClient = redis.createClient();
//redisClient.on('connect', function() {
//    console.log('Conectado a Redis Server');
//});
//
//app.get('/api/configurarRoutes', function(req, res) {
//  modulos.configurarRoutes(req, res, app, container);
//});
const express = require('express');
const http = require('http');
const path = require('path');
const modulos = require('./api/');
const intravenous = require('intravenous');
const cors = require ('cors');

const app = express();

// Configurar cabeceras y cors
app.use(cors());

var cacheKey = "dusoft";

if(process.argv.indexOf("cacheKey") !== -1){ 
    cacheKey = process.argv[process.argv.indexOf("cacheKey") + 1]; 
    console.log("Limpiar cache con llave ", cacheKey);
}

app.get('/*', function (req, res, next) {
        if (req.url.indexOf("/images/") === 0 || req.url.indexOf("/stylesheets/") === 0) {
            res.setHeader("Cache-Control", "public, max-age=2592000000");
            res.setHeader("Expires", new Date(Date.now() + 2592000000).toUTCString());                       
        }
        next();
    });
    


const port = process.env.PORT || 3001;
G = {};
G.settings = require('./lib/Settings').create();
G.Q = require('q');
G.utils = require('./lib/Utils');
G.program = require('commander');
G.trmcol = require('trmcol');
G.axios = require('axios');
G.fs = require('fs-extra');
G.path = require('path');
G.ip = require('ip');

var cluster = require('cluster'),
        RedisStore = require("socket.io-redis"),
        redis = require("redis"),
        pub = redis.createClient(6379, "localhost", {return_buffers: true}),
        sub = redis.createClient(6379, "localhost", {return_buffers: true}),
        client = redis.createClient();

G.redis = client;
//////knix/////
G.knex = require('./lib/Knex').
         create(G.settings.dbHost, G.settings.dbUsername, G.settings.dbPassword, G.settings.dbName).
         connect().getInstance();
 ////////////
 


app.use(express.static(__dirname+'/dist/AngularClienteRout'));
//app.use(express.static(__dirname+'/src/app/app.component.html'));
app.use(express.static('./api/'));


var redisOptions = {
        pubClient: pub,
        subClient: sub,
        host: "redis://localhost",
        port: 6379
    };
const container = intravenous.create();
const server = http.createServer(app);
const io = require('socket.io').listen(server);


io.adapter(RedisStore(redisOptions));
modulos.cargarRoutes(app, container, io);

//app.use(function(req, res, next) {
////  res.header("Access-Control-Allow-Origin", "*"); 
////  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
////  next();
//});

// app.use(function(err, req, res, next) {
//            //registra en log de errores
//            var url = '\nURL: ' + req.originalUrl + '\n';
//            G.logError(url + err);
//
//            res.status(err.status || 500);
//            console.log(err);
//
//            res.send(G.utils.r(req.url, 'Se ha generado un error interno code 1  ', 500, {msj: err}));
//        });

//app.get('/*', function(req, res) {
//  modulos.configurarRoutes(req, res, app, container);
//
//    if(req.url.search('/api/')=== 0){
//    res.sendfile(path.join(__dirname+'/api')); 
//   }else{
////    res.sendfile(path.join(__dirname+'/dist/AngularClienteRout/index.html'));
//    res.sendfile(path.join(__dirname+'/src/index.html'));
////       E:\AngularFrontend\frontend_angular\src\index.html
//   }
//});

app.post('/api/', function (req, res, next) {
    res.set('Cache-Control', 'public, max-age=31557600, s-maxage=31557600');
  res.sendfile(path.join(__dirname+'/api')); 
});

server.listen(port,() => console.log('Running in port: ', port));