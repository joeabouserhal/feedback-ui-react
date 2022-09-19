import { useEffect } from "react";
import { createContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";

const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [feedback, setFeedback] = useState([]);
  const [feedbackEdit, setFeedbackEdit] = useState({
    item: {},
    edit: false,
  });

  useEffect(() => {
    fetchFeedback();
  }, []);

  const fetchFeedback = async () => {
    const response = await fetch("http://localhost:5000/feedback");
    const data = await response.json();
    setFeedback(data);
    setIsLoading(false);
  };

  const deleteFeedback = async (id) => {
    if (window.confirm("Are you sure you want to delete")) {
      await fetch(`http://localhost:5000/feedback/${id}`, {
        method: "DELETE",
      });
      // we filter our array to keep items that don't match the id that
      // we want to delete
      // or we filter  through only the items with ids different than
      // the id that we want to delete
      setFeedback(feedback.filter((item) => item.id != id));
    }
  };

  // add feedback to list
  const addFeedback = async (newFeedback) => {
    const response = await fetch("http://localhost:5000/feedback", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newFeedback),
    });
    // set the feedback to a list containing the new beedback, and after it the old
    // list of already stored feedbacks
    const data = await response.json();
    setFeedback([data, ...feedback]);
  };

  const editFeedback = (item) => {
    // this will set element to be updated and mark it
    // as being in edit mode
    setFeedbackEdit({
      item,
      edit: true,
    });
  };

  const updateFeedback = async (id, updateItem) => {
    const response = await fetch(`http://localhost:5000/feedback/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updateItem)
    });
    const data = await response.json()

    setFeedback(
      feedback.map((item) =>
        item.id === id ? { ...item, ...data } : item
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
        isLoading,
        updateFeedback,
      }}
    >
      {children}
    </FeedbackContext.Provider>
  );
};

export default FeedbackContext;
