import React from 'react'
import { Link, useLocation } from 'react-router-dom'

const WelcomePage = () => {
  const currLoc= useLocation();


  return (
    <div style={{display:'flex', gap:'100px'}}>
      <h1 style={{textAlign:'center'}}>
        Welcome {currLoc.state} !!!
      </h1>
      
      <Link to='/' style={{ margin:'2.5rem auto', }}><button style={{height:'50px',}}>Go Back</button></Link>
    </div>
  )
}

export default WelcomePage