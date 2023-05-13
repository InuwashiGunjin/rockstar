const {findLastThreeConcerts, findAllConcerts, findFutureConcerts} = require("../models/ConcertModel")
const {findLastThreeSongs, findLastThreeSongsAtNewAlbum,findAllSongsOnTheAlbum} = require("../models/AlbumModel")

exports.findLastThreeSongs = () => findLastThreeSongs();
exports.findLastThreeConcerts = () => findLastThreeConcerts();
exports.findLastThreeSongsAtNewAlbum = ()=> findLastThreeSongsAtNewAlbum()
exports.findAllSongsOnTheAlbum = ()=> findAllSongsOnTheAlbum()
exports.findFutureConcerts = ()=> findFutureConcerts()