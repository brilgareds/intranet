var login = function (login) {
    this.m_login = login;

};


login.prototype.logout = function (req, res) {

    var that = this;

   var data = req.query;

    G.Q.ninvoke(that.m_login, 'logout',data).then(function (data) {
       
        res.send(G.utils.r(req.url, 'logout cerrado ', 200, data));

    }).fail(function (err) {
         console.log('err',err);
        res.send(G.utils.r(req.url, 'ERROR EN logout', 500, err));

    }).done();

};


login.prototype.login  = function (req, res) {
    var that = this;
    var data = req.query;
    let user = {};

    var datos= {
    	login : data.login,
    	password : data.password
    }

    G.Q.ninvoke(that.m_login, 'login',datos).then(function (data) {
    
     if(data.length > 0){
         var tokenData = {
            username: datos.login
        }
   

        var token = G.jwt.sign(tokenData, 'Secret Password', {
			 expiresIn: 60 * 60 * 24 // expires in 24 hours
			});

        user = {
            login_id: data[0].id,
            login_rol: data[0].rol_id,
            login_user: data[0].user,
            token: token,
            ingreso: true
        }

        return G.Q.ninvoke(that.m_login,'guardarToken', user);


    }else{
       
       return false;
   }
}).then(function (data) {
 if(data !== false){
   res.send(G.utils.r(req.url, 'Listado password!!!!', 200, user));
 }else{
   res.send(G.utils.r(req.url, 'Listado password!!!!', 200, {msj : 'usuario no valido',ingreso:false}));
 }
 

}).fail(function (err) {
 console.log("Error",err);
 res.send(G.utils.r(req.url, 'Error al realizar login', 500, err));

}).done();

};

login.$inject = [
"m_login",
];

module.exports = login;