const sequelize = require("../config/Database")
const DataTypes = require("sequelize")
const SongModel = require("../models/SongModel")

const AlbumModel = sequelize.define("albums",{
    id_albums:{
        type:DataTypes.INTEGER,
        autoIncrement:true,
        primaryKey:true
    },
    album_name:{
        type: DataTypes.STRING,
        allowNull:false
    },
})

sequelize.sync().then(()=>console.log("Album table created successfully")).catch(err=>console.log(err))

AlbumModel.hasMany(SongModel,{
    foreignKey: 'id_albums',
    constraints: true
})

exports.findLastThreeSongs = () => AlbumModel.findAll({
        include:{
            model:SongModel,
            order:[["createdAt","DESC"]],
        limit:3
        }
    })