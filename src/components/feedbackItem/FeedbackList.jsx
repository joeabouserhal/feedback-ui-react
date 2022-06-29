import React from 'react'
import FeedbackItem from './FeedbackItem'
import PropTypes from 'prop-types';

const FeedbackList = ({ feedback, handleDelete }) => {


    if (!feedback || feedback.length === 0) {
        return <p>No Feedback</p>
    }

    return (
        <div className='feedback-list'>
            {feedback.map((item, index) => (
                <FeedbackItem
                    key={index}
                    item={item}
                    handleDelete={handleDelete} />
            ))}
        </div>
    )
}

FeedbackList.propTypes = {
    feedback:
        // feedback is an array
        PropTypes.arrayOf(
            // the array has elemets with attributes id, text and rating
            PropTypes.shape({
                id: PropTypes.number.isRequired,
                text: PropTypes.string.isRequired,
                rating: PropTypes.number.isRequired,
            })
        )
}

export default FeedbackList