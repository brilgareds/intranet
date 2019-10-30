var loginModel = function () {

};

loginModel.prototype.login= function (data,callback) {

	var query = G.knex
	.select()
	.from("intranet.login")
	.where('user',data.login)
	.andWhere('pass',data.password);    
	query.then(function (resultado) {
		callback(false, resultado);
	}).catch(function (err) {
		console.log("err [login]:", err);
		callback({err: err, msj: "Error al consultar login"});
	});
};



loginModel.prototype.guardarToken= function (data,callback) {

	//console.log("/*//*/*/*/*entrooo", data);
	var d = new Date();
	var fecha = d.getDate()+'/'+(d.getMonth()+1)+'/'+d.getFullYear()+' '+d.getUTCHours()+':'+d.getMinutes();

	var query = G.knex('intranet.token')
	.returning('id')
	.insert({
		login_id: data.login_id,
		token: data.token,
		fecha: fecha
	});

   query.then(function (id) {
      // console.log("122****guardarToken",query.toString());
      const resultado = {
      	id,
      	
      };
      callback(false, resultado);
  }).catch(function (err) {
  	console.log("err [guardarToken]:", err);
  	callback({err: err, msj: "Error al guardar guardarToken"});
  });
};

loginModel.prototype.logout= function (data,callback) {
 var query = G.knex("intranet.token")
            .where("id",data.userId)
            .del(); 

    query.then(function (resultado) {
        callback(false, resultado);
    }).catch(function (err) {
        callback({err: err, msj: "Error al logout "});
    });
};



module.exports = loginModel;