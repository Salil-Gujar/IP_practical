import React from 'react'
import { Link } from 'react-router-dom'
const Contact = () => {
  return (
    <>
    <div>This is the contact component ! </div>
    <button><Link to="/">Go to Home</Link></button><br/><br/>
	  <button><Link to="/about">Go to about</Link></button>
    </>
  )
}

export default Contact