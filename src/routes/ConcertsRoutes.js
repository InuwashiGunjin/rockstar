const ConcertRoutes = require("express").Router()

ConcertRoutes.get("/concerts",require("../controllers/ConcertsController").index);
ConcertRoutes.get("/concerts/reserveCard/:id_concert",require("../controllers/ConcertsController").reserveCard);

module.exports = ConcertRoutes;