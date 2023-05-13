const ConcertModel = require("../models/ConcertModel")


exports.findAllConcerts = () => {
    return ConcertModel.findAllConcerts();
}