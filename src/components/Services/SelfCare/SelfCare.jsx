import React from 'react'
import { Link } from 'react-router-dom'
import selfCareStyles from './SelfCare.module.scss'

export default function SelfCare() {
  return (
    <div className={selfCareStyles.wrapper}>
        <div className={selfCareStyles.container}>
            <div className={selfCareStyles.container__border}>
                <div className={selfCareStyles.container__image}>

                </div>
            </div>
            <div className={selfCareStyles.container__text}>
                <h1>SELF-CARE</h1>
            </div>
            <div className={selfCareStyles.container__line}>

            </div>
            <div className={selfCareStyles.container__description}>
                Vitae sapien pellentesque habitant morbi
                nunc. Viverra aliquet  porttitor rhoncus 
                libero justo laoreet sit amet vitae.
            </div>
            <div className={selfCareStyles.container__button}>
                <Link to='/join-hydra'><button>TRY IT NOW</button></Link>
            </div>
        </div>
    </div>
  )
}
