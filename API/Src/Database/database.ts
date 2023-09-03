import {Sequelize} from "sequelize"

export class Database{

    public static database: any
    public static user: any
    public static wallet: any
    public static purchase: any
    public static trip: any
    public static vehicle: any
    public static company: any

    public constructor(){
        Database.database = new Sequelize("CarbonCredit", "root", "1234567", {
            host: "localhost",
            dialect: "mysql"
        })

        this.initializeDatabase()
    }

    private initializeDatabase() {
    
        Database.database.authenticate().then(() => {
            console.log('Database connection has been established successfully.');
         }).catch((error: any) => {
            console.error('Unable to connect to the database: ', error);
         });
    
        // User schema
        Database.user = Database.database.define("user", {
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
                allownull: true
            },
            telephone: {
                type: "VARCHAR(255)",
                allownull: true
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
        Database.wallet = Database.database.define("wallet", {
            credit: {
                type: "DOUBLE",
                allownull: false
            },
            carbonSaved: {
                type: "DOUBLE",
                allownull: false
            }
        })
    
        // Purchase schema
        Database.purchase = Database.database.define("purchase", {
            value: {
                type: "DOUBLE",
                allownull: false
            },
            walletID: {
                type: "VARCHAR(255)",
                allownull: false
            }
        })
    
        // Trip schema
        Database.trip = Database.database.define("trip", {
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
        Database.vehicle = Database.database.define("vehicle", {
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
        Database.company = Database.database.define("company", {
            name: {
                type: "VARCHAR(255)",
                allownull: false
            },
            tripsRequested: {
                type: "INTEGER",
                allownull: false
            },
            accessKey: {
                type: "VARCHAR(255)",
                allownull: false
            }
        })
    
        Database.database.sync().then(() => {
            console.log('Tables created successfully!');
         }).catch((error: any) => {
            console.error('Unable to create tables: ', error);
         });
    }
}