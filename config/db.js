import Sequelize from 'sequelize'
import dotenv from 'dotenv';
dotenv.config({path:"variables.env"});

//usuario root password vacío
console.log(process.env.DB_NOMBRE, process.env.DB_USER, process.env.DB_PASS, process.env.DB_HOST, process.env.DB_PORT)

const db = new Sequelize(process.env.DB_NOMBRE, process.env.DB_USER, process.env.DB_PASS, {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    dialect: 'mysql',
    define: {
        timestamps: false
    },
    pool: {
        max:5,
        min:0,
        acquire: 30000,
        idle: 10000,
    },
    operatorAliases: false
} )

export default db