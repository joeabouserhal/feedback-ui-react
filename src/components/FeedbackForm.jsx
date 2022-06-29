import React from 'react'
import Card from './Card'

const FeedbackForm = () => {
  return (
    <Card>
        <form>
            <h2>How would you rate</h2>
            {/* TODO: Rating select bar */}
            <div className="input-group">
                <input type="text" placeholder='Enter Review'/>
                <button type="submit">Submit</button>
            </div>
        </form>
    </Card>
  )
}

export default FeedbackForm