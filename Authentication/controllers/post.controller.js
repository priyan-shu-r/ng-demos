const models = require('../models');

function save(req,res){
    const post = {
        id: 1,
        username: req.body.username,
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        email: req.body.email
        // password: req.body.password,
        // role: req.body.role,
        // isdeleted: req.body.isdeleted
    }

    models.Post.create(post).then(result => {
        res.status(201).json({
            message: "post successfull",
            post: result
        });
    }).catch(error => {
        res.status(500).json({
            message:'something went wrong',
            error: error
        });
    });
}

module.exports = {
    save:save  //exporting the function//
}