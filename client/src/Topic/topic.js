import React from 'react'
import './style.css'
import moment from 'moment'

export default function Topic(props) {
  return (
   <div className="topic">
     <div className="topicVote">
       <button className="vote_button">
        <span role="img" aria-label="up">+</span>
       </button>
       <h3 className="vote_score">{props.topic.score}</h3>
       <button className="vote_button">
         <span role="img" aria-label="up">-</span>
       </button>
     </div>
     <div className="topic_content">
       <h3 className="content_title">{props.topic.title}</h3>
       <p className="content_date">Created on {moment(props.topic.published_at).format("Do MMM")}</p>
     </div>
     <div className="topic_delete">
       <button className="delete_button">
         <span role="img" aria-label="trash">X</span>
       </button>
     </div>
   </div>
  )
}
