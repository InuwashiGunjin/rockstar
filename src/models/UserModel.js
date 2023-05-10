const sequelize = require("../config/Database")
const DataTypes = require("sequelize")

const UserModel = sequelize.define("users",{
    username:{
        type: DataTypes.STRING,
        allowNull:false
    },
    password:{
        type: DataTypes.STRING,
        allowNull:false
    },
})

sequelize.sync().then(()=>console.log("User table created successfully")).catch(err=>console.log(err))
module.exports =UserModel