import React from 'react'
import FeedbackItem from './FeedbackItem'
import PropTypes from 'prop-types';
import { motion, AnimatePresence } from 'framer-motion'

const FeedbackList = ({ feedback, handleDelete }) => {


    if (!feedback || feedback.length === 0) {
        return <p>No Feedback</p>
    }

    return (
        <div className='feedback-list'>
            <AnimatePresence>
                {feedback.map((item, index) => (
                    <motion.div
                        key={item.id}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}>
                        <FeedbackItem
                            key={index}
                            item={item}
                            handleDelete={handleDelete}
                        />
                    </motion.div>
                ))}
            </AnimatePresence>
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