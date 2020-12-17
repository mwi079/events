import React, {useState,useEffect} from 'react';
import { getTopics,postTopic,deleteTopic,updateTopic } from './ApiService';
import List from './List/list'

import './App.css';

const App=() => {

  const [topics, setTopics] =useState([]);

  useEffect(()=>{
    getTopics()
    .then(topics=>{
      setTopics(topics)
    })
  },[])

  function createTopic (topic) {
    postTopic(topic)
      .then(topic=>{
        setTopics(topics=>[...topics,topic])
      })
  }

  function removeTopic (id) {
    deleteTopic(id)
      .then(()=>{
        setTopics(topics=>topics.filter(topic=>topic._id!==id))
      })
  }

  function voteTopic (id,direction) {
    updateTopic(id,direction)
      .then(updatedTopic=>{
        setTopics(topics=>{
          const topicToUpdate=topics.find(topic=>topic._id===id)
          topicToUpdate.score=updatedTopic.score;
          return [...topics]
        })
      })
  }
 
  return (
    <div>
      <List topics={topics}/>
    </div>
  )
}

export default App;
