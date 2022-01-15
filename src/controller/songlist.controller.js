
const express = require("express");
const SongList = require("../model/songlist.model");
const router = express.Router();

router.get("/songlist",async(req,res)=>{
    const songlist = await SongList.find().exec();
    return res.send(songlist);
});

router.post("/songlist",async(req,res)=>{
    const songlist = await SongList.create(req.body);
    return res.send(songlist);
});

module.exports = router;