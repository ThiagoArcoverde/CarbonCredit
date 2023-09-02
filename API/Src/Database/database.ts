const Sequelize = require("sequelize")

const database = new Sequelize("CarbonCredit", "root", "1234567", {
    host: "localhost",
    dialect: "mysql"
})

function initializeDatabase() {
    
    database.authenticate().then(() => {
        console.log('Database connection has been established successfully.');
     }).catch((error: any) => {
        console.error('Unable to connect to the database: ', error);
     });

    // User schema
    const user = database.define("user", {
        name: {
            type: "VARCHAR(255)",
            allownull: false
        },
        password: {
            type: "VARCHAR(255)",
            allownull: false
        },
        email: {
            type: "VARCHAR(255)",
            allownull: false
        },
        birthday: {
            type: "DATE",
            allownull: false
        },
        walletID: {
            type: "VARCHAR(255)",
            allownull: false
        }
    })

    // Wallet schema
    const wallet = database.define("wallet", {
        credit: {
            type: "DOUBLE",
            allownull: false
        },
        emission: {
            type: "DOUBLE",
            allownull: false
        }
    })

    // Purchase schema
    const purchase = database.define("purchase", {
        value: {
            type: "DOUBLE",
            allownull: false
        },
        purchaseDate: {
            type: "DATE",
            allownull: false
        },
        walletID: {
            type: "VARCHAR(255)",
            allownull: false
        }
    })

    // Trip schema
    const trip = database.define("trip", {
        carbonCredit: {
            type: "DOUBLE",
            allownull: false
        },
        carbonSaved: {
            type: "DOUBLE",
            allownull: false
        },
        distance: {
            type: "DOUBLE",
            allownull: false
        },
        startLocation: {
            type: "VARCHAR(255)",
            allownull: false
        },
        finalLocation: {
            type: "VARCHAR(255)",
            allownull: false
        },
        vehicleID: {
            type: "VARCHAR(255)",
            allownull: false
        },
        companyID: {
            type: "VARCHAR(255)",
            allownull: false
        },
        walletID: {
            type: "VARCHAR(255)",
            allownull: false
        }
    })

    // Vehicle schema
    const vehicle = database.define("vehicle", {
        name: {
            type: "VARCHAR(255)",
            allownull: false
        },
        score: {
            type: "DOUBLE",
            allownull: false
        }
    })

    // Company schema
    const company = database.define("company", {
        name: {
            type: "VARCHAR(255)",
            allownull: false
        },
        tripsRequested: {
            type: "INTEGER",
            allownull: false
        },
        keyAccess: {
            type: "VARCHAR(255)",
            allownull: false
        }
    })

    database.sync().then(() => {
        console.log('Tables created successfully!');
     }).catch((error: any) => {
        console.error('Unable to create tables: ', error);
     });
}




export { initializeDatabase }