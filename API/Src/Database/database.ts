const Sequelize = require("sequelize")

const database = new Sequelize("CarbonCredit", "root", "1234567", {
    host: "localhost",
    dialect: "mysql"
})

 export { database }