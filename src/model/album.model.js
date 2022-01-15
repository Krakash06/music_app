const mongoose=require("mongoose");
const AlbumSchema = new mongoose.Schema({
    title:{type:String,required:false},
    image:{type:String,required:false},
    tracknum:{type:Number,required:false},
    year:{type:String,required:false},
    genre:{type:String,required:false},
    songs:[{type:mongoose.Schema.Types.ObjectId,ref:"songlist",required:false}],
},{
    timestamps:true,
    versionKey:false
});
module.exports=mongoose.model("album",AlbumSchema);