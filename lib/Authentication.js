
// Valida que el usuarios este autenticado
exports.validate = function () {

    return function (req, res, next) {

        if (req.url.indexOf("/api/login?login") !== -1) {
            next();
            return;
        }
        
        if (req.url.indexOf("/api/ipLocal") !== -1) {
            next();
            return;
        }

        if (!!req.url.match(/^(\/api\/)/)) {

            if (req.headers.authorization === undefined) {                
                res.send(G.utils.r(req.url, 'No esta Logeado.', 401, {}));
                return;
            }

            var sesion = {
                login_id: req.headers.login_id,
                token: req.headers.authorization.replace('bearer', '').trim()
            };

            // Validar si tiene sesion activa 
            G.Q.nfcall(isAuthenticated, sesion.login_id, sesion.token).then(function (data) {
            
                if (data) {
                    return G.Q.nfcall(updateSessionDate, sesion.login_id, sesion.token);
                } else {
                    throw{msj: 'No esta Logeado..'}
                }
            }).then(function (resp) {
            
                next();
            }).fail(function (err) {
                console.log("Eror validate", err);
                res.send(G.utils.r(req.url, 'No esta Logeado...', 401, err));
            }).done();
        } else {
            next();
        }
    };
};


// Verifica que el usuario este autenticado
function isAuthenticated(login_id, token, callback) {

    var query = G.knex.column("id","fecha")
            .select()
            .from("intranet.token")
            .where("login_id",login_id)
            .andWhere("token",token); 
    
    query.then(function(resultado){
       if(resultado.length > 0){
           callback(false, true);
       } else {
           callback(false, false);
       }

    }).catch(function(err){
        console.log("Error isAuthenticated ",err);
       callback(err);
    });
};

// Actualiza la session del usuario
function updateSessionDate(login_id, token, callback) {
    
       var query = G.knex('intranet.token')
           .where("login_id",login_id)
           .andWhere("token",token)
           .update({
                    fecha: 'now()'
                  });
 
   query.then(function (resultado) {

       callback(false, resultado);
   }).catch(function (err) {
       console.log("err------",err);
       callback({err: err, msj: err});
   });
};
