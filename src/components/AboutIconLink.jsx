import React from 'react'
import { Link } from 'react-router-dom'

import { FaQuestion } from 'react-icons/fa'


const AboutIconLink = () => {
    return (
        <div className='about-link'>
            <Link to="/about">
                <FaQuestion />
            </Link>
        </div>
    )
}

export default AboutIconLink