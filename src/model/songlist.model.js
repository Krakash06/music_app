const mongoose = require("mongoose");

const SongList = new mongoose.Schema({
    name:{type:String,required:false},
    singer:{type:String,required:false},
    duration:{type:String,required:false}
},{
    timestamps:true,
    versionKey:false
});
module.exports = mongoose.model("songlist",SongList);