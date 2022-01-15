const express = require("express");
const Artist = require("../model/artist.model");
const router = express.Router();

router.get("/artist",async(req,res)=>{
    const artist = await Artist.find().populate("albumId").exec();
    return res.send({artist});
});
router.post("/artist",async(req,res)=>{
    const artist = await Artist.create(req.body);
    return res.send(artist);
});
//get artist : by name
// router.get("/artist/:name",async(req,res)=>{
//     const artist = await Artist.find({name:req.params.name}).populate("albumId").lean().exec();
//     return res.send(artist);
// });
// router.patch("/artist/:id",async(req,res)=>{
//     const artist = await Artist.findByIdAndUpdate(req.params.id,req.body,{new:true}).lean().exec();
//     return res.send(artist);
// })
module.exports = router;