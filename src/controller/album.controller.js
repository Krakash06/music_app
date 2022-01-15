
const express = require("express");
const Album = require("../model/album.model");
const router = express.Router();

router.post("/album",async(req,res)=>{
    const album = await Album.create(req.body);
    return res.send(album);
});

router.get("/album/:title",async(req,res)=>{
    const album = await Album.find({title:req.params.title}).populate("songs").exec();
    return res.send(album);
});

router.get("/album",async(req,res)=>{
    const page = + req.query.page 
    const size = + req.query.size
    const offset = (page - 1) * size
    const album = await Album.find().populate("songs").skip(offset).limit(size).exec();
    return res.send(album);
});

module.exports = router;
