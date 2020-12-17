const Topic=require('../model/schema');

async function getTopics (_, response) {
  try {
    const topics= await Topic.find();
    response.send(topics);
  } catch (error) {
    //console.log('GET TOPICS:', error);
    response.sendStatus(500);
  }
}

async function postTopic (request, response) {
  try {
    const {title}= request.body;
    const topic=await Topic.create({title});
    response.status(201);
    response.send(topic);
  } catch (error) {
    //console.log('POST TOPIC:', error);
    response.sendStatus(500);
  }
}

async function deleteTopic (request, response) {
  try {
    const {id}=request.params;
    //console.log(id)
    await Topic.deleteOne({
      _id:id
    });
    response.sendStatus(204);
  } catch (error) {
    //console.log ('DELETE TOPIC', error);
    response.sendStatus(500);
  }
}

async function voteTopic (request,response,direction) {
  try {
    const {id}=request.params;
    const topic = await Topic.findByIdAndUpdate(
      id,
      {
        $inc: {score:direction}
      },
      {new:true}
    );
    response.send(topic);
  } catch (error) {
    //console.log ('VOTING: ', error);
    response.sendStatus(500);
  }
}

async function voteUp (request,response) {
  voteTopic(request,response, 1);
}

async function voteDown (request,response) {
  voteTopic(request,response, -1);
}

module.exports= {getTopics,postTopic,deleteTopic,voteUp,voteDown};
