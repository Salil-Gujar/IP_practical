import React from 'react'
import { Link } from 'react-router-dom'
const About = () => {
  return (
    <>
    <div>This is the about component ! </div>
    <button><Link to="/">Go to Home</Link></button><br/><br/>
	  <button><Link to="/contact">Go to contacts</Link></button>
    </>
  )
}

export default About