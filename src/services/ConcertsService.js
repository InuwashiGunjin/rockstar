const ConcertModel = require("../models/ConcertModel")


exports.findAllConcerts = () => {
    return ConcertModel.findAllConcerts();
}

exports.findOneNonReservedCard = (concertId) =>
{
    return ConcertModel.findOneNonReservedCard(concertId);
}