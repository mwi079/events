const express=require('express');
const router=express.Router();

router.get('/',()=>{console.log('get')});
router.post('/',()=>{console.log('post')});
router.delete('/:id',()=>{console.log('delete')});
router.put('/:id/up',()=>{console.log('vote up')});
router.put('/:id/down',()=>{console.log('vote down')});

module.exports=router;