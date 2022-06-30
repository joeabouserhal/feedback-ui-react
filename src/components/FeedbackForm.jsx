import React, { useState } from 'react'
import Card from './shared/Card'
import Button from './shared/Button'

const FeedbackForm = () => {

  const [text, setText] = useState('')
  const [btnDisabled, setBtnDisabled] = useState(true)
  const [message, setMessage] = useState('')

  // every time the text in the iput is changed
  // we update the text state
  const handleTextChange = (e) => {
    if (text === '') {
      // if the text is empty, the button is disabled
      setBtnDisabled(true)
      setMessage(null)
      // if the text is not empty but shorter than 10 characters,
      // then the button is disabled
    } else if (text !== '' && text.trim().length <= 10) {
      setBtnDisabled(true)
      setMessage('Text must be at least 10 characters long')
      // else the message is > 10 characters long so we can submit
    } else {
      setBtnDisabled(false)
      setMessage(null)
    }
    setText(e.target.value)
  }

  return (
    <Card>
      <form>
        <h2>How would you rate</h2>
        {/* TODO: Rating select bar */}
        <div className="input-group">
          <input
            type="text"
            placeholder='Enter Review'
            onChange={handleTextChange}
            value={text}
          />
          <Button type='submit' isDisabled={btnDisabled}>Submit</Button>
          {/* if there is a message, display it */}
        </div>
        {message && <p className='message'>{message}</p>}
      </form>
    </Card>
  )
}

export default FeedbackForm