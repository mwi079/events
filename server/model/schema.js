const mongoose = require ('./model.index');

const topicSchema = new mongoose.Schema(
  {
    title:{type:String, required:true},
    published_at:{type:Date, default:Date.now},
    score:{type:Number, default:0},
  },
  {autoCreate:true}
);

const Topic=mongoose.model('topic',topicSchema);

module.exports=Topic;