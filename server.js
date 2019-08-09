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

const app = express();


const port = process.env.PORT || 3001;
G = {};
G.settings = require('./lib/Settings').create();
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


app.get('/*', function(req, res) {
  modulos.configurarRoutes(req, res, app, container);
   res.sendfile(path.join(__dirname+'/dist/AngularClienteRout/index.html'));
   
});

server.listen(port,() => console.log('Running ...'));