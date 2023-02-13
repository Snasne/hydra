import React from 'react'
import aboutBodyTextStyles from './AboutBodyText.module.scss'
import { Link } from 'react-router-dom'

export default function AboutBodyText() {
  return (
    <div className={aboutBodyTextStyles.wrapper}>
      <div className={aboutBodyTextStyles.container}>
        <h1>ABOUT</h1>
        <h2>HYDRA VR</h2>
        <p>
          Eget mi proin sed libero enim sed faucibus turpis. Nisl rhoncus mattis rhoncus 
          urna neque viverra justo. Vivamus at augue eget arcu dictum. Ultrices gravida 
          dictum fusce ut placerat orci. Aenean et tortor at risus viverra adipiscing at in. 
          Mattis aliquam faucibus purus in massa. Est placerat in egestas erat imperdiet 
          sed. Consequat semper viverra nam libero justo laoreet sit amet. Aliquam 
          etiam erat velit scelerisque in dictum non consectetur a. Laoreet sit amet 
          cursus sit amet. Vel eros donec ac odio tempor orci dapibus. Sem nulla pha
          retra diam sit amet nisl suscipit adipiscing bibendum. Leo a diam sollicitudi
          n tempor.
        </p>
        <Link to='/join-hydra'><button>LET'S GET IN TOUCH</button></Link>
      </div>
    </div>
  )
}
