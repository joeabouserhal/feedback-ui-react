import { createContext, useState } from "react";
import { v4 as uuidv4 } from 'uuid'

const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {

  const [feedback, setFeedback] = useState([]);

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
    <FeedbackContext.Provider value={{ feedback, setFeedback, deleteFeedback, addFeedback }}>
      {children}
    </FeedbackContext.Provider>
  );
}


export default FeedbackContext