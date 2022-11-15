import { useState, useContext, useEffect } from "react";
import PropTypes from "prop-types";

import FeedbackContext from "../context/FeedbackContext";

const RatingSelect = ({ select }) => {
  const [selected, setSelected] = useState(10);
  const { feedbackEdit } = useContext(FeedbackContext);

  useEffect(() => {
    setSelected(feedbackEdit.item.rating);
  }, [feedbackEdit]);

  useEffect(() => {
    setSelected(10);
  }, []);

  const handleChange = (e) => {
    // we added a + before the value to turn into a number
    // for the selection to work
    setSelected(+e.target.value);
    select(+e.target.value);
  };

  return (
    <ul className="rating">
      {Array.from({ length: 10 }, (_, i) => (
        <li key={`rating-${i + 1}`}>
          <input
            type="radio"
            id={`num${i + 1}`}
            name="rating"
            value={i + 1}
            onChange={handleChange}
            checked={selected === i + 1}
          />
          <label htmlFor={`num${i + 1}`}>{i + 1}</label>
        </li>
      ))}
    </ul>
  );
};

RatingSelect.defaultProps = {};

RatingSelect.propTypes = {
  select: PropTypes.func.isRequired,
};

export default RatingSelect;
