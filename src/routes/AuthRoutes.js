const AuthRoutes = require("express").Router()

//VIEW
AuthRoutes.get("",require("../controllers/AuthController").registration)
AuthRoutes.get("login",require("../controllers/AuthController").login)

//PROCESS
AuthRoutes.post("registrationProccess",require("../controllers/AuthController").registrationProccess)
AuthRoutes.post("loginProccess",require("../controllers/AuthController").loginProccess)

module.exports = AuthRoutes