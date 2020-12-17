import React from 'react'
import Topic from '../Topic/topic'

export default function List(props) {
  return (
      props.topics.length ? props.topics
      .sort((a,b)=>a.score<b.score? 1:-1)
      .map((topic)=>{
        return <Topic topic={topic} key={topic._id} removeTopic={props.removeTopic} voteTopic={props.voteTopic}/>
      })
      : "No topics yet"
  )
}
