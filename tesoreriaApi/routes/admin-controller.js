const express = require('express');
const router = express.Router();
const model = require('../models/index');

const sequelize = require('sequelize');
const Op = model.Sequelize.Op;
const Token = model.token;
router.post('/login',(req,res) => {
    model.Admin.findOne({
        where: {
            [Op.and]: [{
                name: req.body.name,
            },
            {
               password: req.body.key 
            }]
        }
    })
    .then(item => {
        if(item) {
            return item;
        }
        else {
            res.json({
                ok:false,
                message: "Credenciales no válidas"
            }) 
        }
    })
    .then(user => {
        let token = '';
        const charsPossibles = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        const long = 20;
        for(let i = 0; i < 20; i++) {
            token += charsPossibles.charAt(Math.floor(Math.random() * charsPossibles.length));
        }
        return Token.create({
            token, 
            idadmin: user._uuid,
            nameadmin: user.name
        });
    })
    .then(token => res.json({ok:true,data:token}))
    .catch(err => console.log(err));
});

module.exports = router;