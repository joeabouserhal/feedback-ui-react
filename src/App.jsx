import Header from "./components/Header"
import { Routes, Route } from 'react-router-dom'

import FeedbackList from "./components/FeedbackList"
import FeedbackStats from "./components/FeedbackStats"
import FeedbackForm from "./components/FeedbackForm"
import AboutIconLink from "./components/AboutIconLink"

import AboutPage from "./pages/AboutPage"

import { FeedbackProvider } from "./context/FeedbackContext"

function App() {

  return (
    <FeedbackProvider>
      <Header />
      <div className="container">
        <Routes>
          <Route exact path="/" element={
            <div>
              <FeedbackForm />
              <FeedbackStats />
              <FeedbackList />
              <AboutIconLink />
            </div>
          } />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </div>
    </FeedbackProvider>

  )
}

export default App
