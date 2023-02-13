import React from 'react'
import { Link } from 'react-router-dom'
import outdoorStyles from './Outdoor.module.scss'

export default function Outdoor() {
  return (
    <div className={outdoorStyles.wrapper}>
        <div className={outdoorStyles.container}>
            <div className={outdoorStyles.container__border}>
                <div className={outdoorStyles.container__image}>

                </div>
            </div>
            <div className={outdoorStyles.container__text}>
                <h1>OUTDOOR</h1>
            </div>
            <div className={outdoorStyles.container__line}>

            </div>
            <div className={outdoorStyles.container__description}>
                Vitae sapien pellentesque habitant morbi
                nunc. Viverra aliquet  porttitor rhoncus 
                libero justo laoreet sit amet vitae.
            </div>
            <div className={outdoorStyles.container__button}>
                <Link to='/join-hydra'><button>TRY IT NOW</button></Link>
            </div>
        </div>
    </div>
  )
}
