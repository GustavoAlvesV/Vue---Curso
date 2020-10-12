module.exports = app => {
    app.route('/users')
        .post(app.api.user.save)
//        .get(app.api.user.get)  
    app.get('/users', app.api.user.get)

    app.route('/users/:id')
        .put(app.api.user.save)
        .get(app.api.user.getById)

    app.route('/categories')
        .post(app.api.category.save)
        .get(app.api.category.get)
    
    app.route('/categories/:id')
        .get(app.api.category.getById)
        .put(app.api.category.save)
        .delete(app.api.category.remove)

    app.get('/', function(req,res){ 
        res.send("Bem Vindo");  
    })
}