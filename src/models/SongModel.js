const sequelize = require("../config/Database")
const DataTypes = require("sequelize")

const SongModel = sequelize.define("songs",{
    id_songs:{
        type:DataTypes.INTEGER,
        autoIncrement:true,
        primaryKey:true
    },
    city:{
        type: DataTypes.STRING,
        allowNull:false
    },
    yt_link:{
        type: DataTypes.STRING,
        allowNull:false
    }
})

sequelize.sync().then(()=>console.log("Song table created successfully")).catch(err=>console.log(err))
module.exports = SongModel