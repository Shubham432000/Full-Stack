const mongoose = require("mongoose")

const database = process.env.DATABASE
mongoose.set('strictQuery', true);

mongoose.connect(database,{ useNewUrlParser: true, useUnifiedTopology: true })
.then(()=>{console.log("connection succes")})
.catch((err)=>{console.log(err)})