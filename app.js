const express = require("express");
const connect = require("./src/config/db");
const app = express();
const cors=require('cors')
app.use(express.json());
app.use(cors())
const albumController = require("./src/controller/album.controller");
const songsController = require("./src/controller/songlist.controller");
const artistContoller = require("./src/controller/artist.controller");

app.use("/",albumController);
app.use("/",songsController);
app.use("/",artistContoller);

app.listen(3003,async function(){
    await connect();
    console.log("Listening on Port 3003");
})