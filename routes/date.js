import express from 'express';
var router = express.Router();

/* GET api/getTime listing. */
router.get('/', function(req, res) {
    console.log("Getting time!")
    res.type("txt")
    res.send(getTime())
});

// this is Get api/getTime/json
router.get('/json', function(req, res) {
    console.log("Getting time (as JSON)!")
    res.type("json")
    res.send({
        "now": getTime(),
    })
})

function getTime() {
    return new Date()
}

export default router;