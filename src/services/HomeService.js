const {findLastThreeConcerts} = require("../models/ConcertModel")
const SongModel = require("../models/SongModel")
const {findLastThreeSongs} = require("../models/AlbumModel")

exports.findLastThreeSongs = () => findLastThreeSongs();
exports.findLastThreeConcerts = () => findLastThreeConcerts();
