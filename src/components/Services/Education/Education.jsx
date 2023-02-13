import React from 'react'
import educationStyles from './Education.module.scss'
import { Link } from 'react-router-dom'

export default function Education() {
  return (
    <div className={educationStyles.wrapper}>
        <div className={educationStyles.container}>
            <div className={educationStyles.container__border}>
                <div className={educationStyles.container__image}>

                </div>
            </div>
            <div className={educationStyles.container__text}>
                <h1>EDUCATION</h1>
            </div>
            <div className={educationStyles.container__line}>

            </div>
            <div className={educationStyles.container__description}>
                Vitae sapien pellentesque habitant morbi
                nunc. Viverra aliquet  porttitor rhoncus 
                libero justo laoreet sit amet vitae.
            </div>
            <div className={educationStyles.container__button}>
                <Link to='/join-hydra'><button>TRY IT NOW</button></Link>
            </div>
        </div>
    </div>
  )
}
