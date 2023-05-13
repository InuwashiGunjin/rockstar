const ConcertRoutes = require("express").Router()

ConcertRoutes.get("/concerts",require("../controllers/ConcertsController").index);

module.exports = ConcertRoutes;