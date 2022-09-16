import { createContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";

const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
  const [feedback, setFeedback] = useState([]);
  const [feedbackEdit, setFeedbackEdit] = useState({
    item: {},
    edit: false,
  });

  const deleteFeedback = (id) => {
    if (window.confirm("Are you sure you want to delete")) {
      // we filter our array to keep items that don't match the id that
      // we want to delete
      // or we filter  through only the items with ids different than
      // the id that we want to delete
      setFeedback(feedback.filter((item) => item.id != id));
    }
  };

  // add feedback to list
  const addFeedback = (newFeedback) => {
    newFeedback.id = uuidv4();
    // set the feedback to a list containing the new beedback, and after it the old
    // list of already stored feedbacks
    setFeedback([newFeedback, ...feedback]);
  };

  const editFeedback = (item) => {
    // this will set element to be updated and mark it
    // as being in edit mode
    setFeedbackEdit({
      item,
      edit: true,
    });
  };

  const updateFeedback = (id, updateItem) => {
    console.log(id, updateItem);
    setFeedback(
      feedback.map((item) =>
        item.id === id ? { ...item, ...updateItem } : item
      )
    );
  };

  return (
    <FeedbackContext.Provider
      value={{
        feedback,
        setFeedback,
        deleteFeedback,
        addFeedback,
        editFeedback,
        feedbackEdit,
        updateFeedback,
      }}
    >
      {children}
    </FeedbackContext.Provider>
  );
};

export default FeedbackContext;
