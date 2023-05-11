const ConcertModel = require("../models/ConcertModel")
const SongModel = require("../models/SongModel")
const AlbumModel = require("../models/AlbumModel")

exports.findLastThreeSongs = ()=>AlbumModel.findAll({
    include:{
        model:SongModel,
        order:[["createdAt","DESC"]],
    limit:3
    }
})
exports.findLastThreeConcerts = ()=>ConcertModel.findAll({
    order:[["createdAt","DESC"]],
    limit:3
})
