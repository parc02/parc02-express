const express = require('express')
const router = express.Router();

router.get('/artist/:id', function (req, res) {
    console.log("id는 "+req.params.id +"입니다")
    res.send("id : "+res.params.id)
});

router.get('/artists/:id/conpany/:company', function(req, res) {
    res.send("id : " +req.params.id +"회사 : "+ req.params.company)
});
