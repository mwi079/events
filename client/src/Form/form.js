import {useState} from 'react';
import './style.css'

function TopicForm (props) {
  const [title,setTitle]=useState('')

function handleChange(event) {
  setTitle(event.target.value)
}

function handleSubmit(event) {
  event.preventDefault();
  if(!title) return alert("title is empty");
  props.createTopic({title})
  setTitle('')
}

  return (
    <form onSubmit={handleSubmit} className="form">
      <input type="text" className="form_input" value={title} onChange={handleChange}></input>
      <button type="submit" className="form_submit">Create</button>
    </form>

  )
}

export default TopicForm;