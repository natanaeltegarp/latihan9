import React from 'react'
import { useNavigate } from 'react-router-dom'

const Contact = () => {
    const navigate = useNavigate()

    const goBack = () => {
        navigate(-1);
    }
  return (
    <div>
      <h1>This is the contact page</h1>
      <button onClick={goBack}>Go Back</button>
    </div>
  )
}

export default Contact
