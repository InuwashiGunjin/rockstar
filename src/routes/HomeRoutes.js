const HomeRoutes = require("express").Router()

HomeRoutes.get("",require("../controllers/HomeController").index)
HomeRoutes.get("/api",require("../controllers/HomeController").index)
HomeRoutes.get("/discography",require("../controllers/HomeController").discography)
HomeRoutes.get("/buycard",require("../controllers/HomeController").findFutureConcerts)

module.exports = HomeRoutes