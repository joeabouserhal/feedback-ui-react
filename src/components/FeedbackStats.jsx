import React from 'react'
import PropTypes from 'prop-types';

const FeedbackStats = ({ feedback }) => {

    // the reduce function has 2 arguments: acc or accumulative sum 
    // (we specified it starts from 0) and the current value
    // each iteration we add up cumulative from last iteration
    // to current value ex:
    // 0+1 = 1 new cumulative sum => 1+1= 2 new acc => 2+1= 3 new acc ...
    let average = feedback.reduce((acc, cur) => { return acc + cur.rating }, 0)/ feedback.length

    // this function lets it so average only has one decimal point
    // and in case we are left with x.0 we round it to x
    average.toFixed(1).replace(/'[.,]0$'/, '')

    return (
        <div className='feedback-stats'>
            <h4>{feedback.length} Reviews</h4>
            <h4>Average Rating: {isNaN(average) ? 0 : average}</h4>
        </div>
    )
}

FeedbackStats.propTypes = {
    feedback: PropTypes.array.isRequired
}

export default FeedbackStats