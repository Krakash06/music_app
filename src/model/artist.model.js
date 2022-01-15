const mongoose = require("mongoose");
const ArtistSchema = new mongoose.Schema({
    name:{type:String,required:false},
    email:{type:String,required:false},
    password:{type:String,required:false},
    url:{type:String,required:false},
    albumId:[{type:mongoose.Schema.Types.ObjectId,ref:"album",required:false}]
},{
    timestamps:true,
    versionKey:false
});
module.exports = mongoose.model("artist",ArtistSchema);