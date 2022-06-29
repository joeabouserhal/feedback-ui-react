import Header from "./components/header/Header"
import { useState } from 'react'

import FeedbackData from "./data/FeedbackData"
import FeedbackList from "./components/feedbackItem/FeedbackList"
import FeedbackStats from "./components/feedbackStats/FeedbackStats"

function App() {

  const [feedback, setFeedback] = useState(FeedbackData)

  const deleteFeedback = (id) => {
    if (window.confirm('Are you sure you want to delete')) {
      // we filter our array to keep items that don't match the id that
      // we want to delete
      setFeedback(feedback.filter(item => item.id != id))
    }
  }

  return (
    <div className="App">
      <Header />
      <div className="container">
        <FeedbackStats feedback={feedback}/>
        <FeedbackList feedback={feedback} handleDelete={deleteFeedback} />
      </div>
    </div>
  )
}

export default App
