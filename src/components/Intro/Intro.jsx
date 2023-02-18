import React, { useEffect,useRef } from 'react'
import "./intro.scss"

import { init } from 'ityped'

const Intro = () => {

  const textRef = useRef()

// console.log(textRef)
  useEffect(() => {

    init(textRef.current,
      { backdelay:1500,backSpeed:60,showCursor: true, strings: ["Developer","Designer", "Content Creator" ] })

  },[])
  
  return (
    <div className='intro' id='intro'>
      <div className="left">
        <div className="imageCotainer">
          <img src="assets/man.png" alt="" />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Hi There, I'm</h2>
          <h1>Lama</h1>
          <h3>Freelance <span ref={textRef}></span></h3>
        </div>
        <a href="#portfolio">
          <img src="assets/down.png" alt="" />
        </a>
      </div>
    </div>
  )
}

export default Intro