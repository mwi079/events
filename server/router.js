const express=require('express');
const router=express.Router();
const {getTopics,postTopic,deleteTopic,voteUp,voteDown}=require('./controller/controller.topic');


router.get('/',getTopics);
router.post('/',postTopic);
router.delete('/:id',deleteTopic);
router.put('/:id/up',voteUp);
router.put('/:id/down',voteDown);

module.exports=router;