import React, { useState, useContext, useEffect } from "react";
import Card from "./shared/Card";
import Button from "./shared/Button";
import RatingSelect from "./RatingSelect";

import FeedbackContext from "../context/FeedbackContext";

const FeedbackForm = () => {
  const { addFeedback, feedbackEdit, updateFeedback } =
    useContext(FeedbackContext);

  const [text, setText] = useState("");
  const [rating, setRating] = useState(10);
  const [btnDisabled, setBtnDisabled] = useState(true);
  const [message, setMessage] = useState("");

  // everytime feedbackEdit is changed, we execute the code in useEffect
  useEffect(() => {
    if (feedbackEdit.edit === true) {
      setBtnDisabled(false);
      setText(feedbackEdit.item.text);
    }
  }, [feedbackEdit]);

  // every time the text in the iput is changed
  // we update the text state
  const handleTextChange = (e) => {
    if (text === "") {
      // if the text is empty, the button is disabled
      setBtnDisabled(true);
      setMessage(null);
      // if the text is not empty but shorter than 10 characters,
      // then the button is disabled
    } else if (text !== "" && text.trim().length <= 10) {
      setBtnDisabled(true);
      setMessage("Text must be at least 10 characters long");
      // else the message is > 10 characters long so we can submit
    } else {
      setBtnDisabled(false);
      setMessage(null);
    }
    setText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim().length > 10) {
      const newFeedback = {
        text,
        rating,
      };
      if (feedbackEdit.edit === true) {
        updateFeedback(feedbackEdit.item.id, newFeedback);
      } else {
        addFeedback(newFeedback);
      }
      setText("");
    }
  };

  return (
    <Card>
      <form onSubmit={handleSubmit}>
        <h2>How would you rate</h2>
        {/* TODO: Rating select bar */}
        <div className="input-group">
          <input
            type="text"
            placeholder="Enter Review"
            onChange={handleTextChange}
            value={text}
          />
          <Button type="submit" isDisabled={btnDisabled}>
            Submit
          </Button>
          {/* if there is a message, display it */}
        </div>
        {message && <p className="message">{message}</p>}
        <RatingSelect
          select={(rating) => {
            setRating(rating);
          }}
        />
      </form>
    </Card>
  );
};

export default FeedbackForm;
