import Header from "./components/Header"
import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import { Routes, Route } from 'react-router-dom'

import FeedbackData from "./data/FeedbackData"
import FeedbackList from "./components/FeedbackList"
import FeedbackStats from "./components/FeedbackStats"
import FeedbackForm from "./components/FeedbackForm"
import AboutIconLink from "./components/AboutIconLink"

import AboutPage from "./pages/AboutPage"

function App() {

  const [feedback, setFeedback] = useState(FeedbackData)

  const deleteFeedback = (id) => {
    if (window.confirm('Are you sure you want to delete')) {
      // we filter our array to keep items that don't match the id that
      // we want to delete
      // or we filter  through only the items with ids different than
      // the id that we want to delete
      setFeedback(feedback.filter(item => item.id != id))
    }
  }

  const addFeedback = (newFeedback) => {
    newFeedback.id = uuidv4()
    setFeedback([newFeedback, ...feedback])
  }

  return (
    <>
      <Header />
      <div className="container">
        <Routes>
          <Route exact path="/" element={
            <div>
              <FeedbackForm handleAdd={addFeedback} />
              <FeedbackStats feedback={feedback} />
              <FeedbackList feedback={feedback} handleDelete={deleteFeedback} />
              <AboutIconLink/>
            </div>
          } />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </div>
    </>

  )
}

export default App
