module.exports = function(app, di_container) {

    var c_login = di_container.get("c_login");

     app.get('/api/login', function(req, res) {
        c_login.login(req, res);
     });


     app.get('/api/logout', function(req, res) {
        c_login.logout(req, res);
     });
    };