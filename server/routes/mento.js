const express = require('express');
const User = require('../models/user');

const router = express.Router();

router.get('/register', async (req, res, next) => {
//    let mento = req.params.body.mento;
    let mento_id = req.params.body.id;

    try{
        let message;
//        if (mento.mento === false){
//            User.update({
//                mento: true,
//            }, {
//                where: {id: mento_id},
//            })
//        } else{
//            message = "Already registered";
//            return res.send('message');
//        }
        User.update({
            mento: true,
        }, {
            where: {id: mento_id}
        })
        message = "Register new mento";
        return res.send('message');
    } catch (err) {
        console.error(err);
        next(err);
    }
});

module.exports = router;