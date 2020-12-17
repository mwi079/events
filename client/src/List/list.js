import React from 'react'
import Topic from '../Topic/topic'

export default function List(props) {
  return (
    <div>
      {props.topics.map((topic)=>{
        return <Topic topic={topic} key={topic._id}/>
      })}
    </div>
  )
}
