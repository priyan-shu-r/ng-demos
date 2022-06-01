// const models = require('../models');
// const bcryptjs = require('../bcryptjs');
// const jwt = require('jsonwebtoken');

// function signup(req, res){
//    const user = {
//        firstname:req.body.firstname,
//        lastname:req.body.lastname,
//        email:req.body.email,
//        password:req.body.password,
//    }

//    models.User.create(user).then(result => {
//       res.status(201).json({
//         message : "user created successfully",
//       })
//    }).catch((error)=> {
//       res.status(500).json({
//         message : "something went wrong!",
//       });
//    });

// }

// module.exports = signup;