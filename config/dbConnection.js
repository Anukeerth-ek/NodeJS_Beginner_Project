const mongoose = require('mongoose')

const connectDb = async ()=> {
    try {
        const connect = await mongoose.connect(process.env.CONNECTION_STRING);
        console.log("Database connected to:", connect.connection.host,
            connect.connection.name
        )
    }
    catch(error) {
        console.log("The errro is ", error)
        process.exit(1)
    }
}

module.exports = connectDb