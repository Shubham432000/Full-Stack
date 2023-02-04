const dotenv = require("dotenv")
const mongoose = require("mongoose")
const express = require("express")
const app = express()
const cors = require("cors")


dotenv.config({path:'./config.env'})
require("./db/Database")
app.use(cors())
app.use(express.json())

app.use(require("./router/Todo"))
const PORT = process.env.PORT


app.listen(PORT, () => {
    console.log(`server is start port number${PORT} `);
});

