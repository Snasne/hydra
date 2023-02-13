import React from 'react'
import { Link } from 'react-router-dom'
import simulationStyles from './Simulation.module.scss'

export default function Simulation() {
  return (
    <div className={simulationStyles.wrapper}>
        <div className={simulationStyles.container}>
            <div className={simulationStyles.container__border}>
                <div className={simulationStyles.container__image}>

                </div>
            </div>
            <div className={simulationStyles.container__text}>
                <h1>SIMULATION</h1>
            </div>
            <div className={simulationStyles.container__line}>

            </div>
            <div className={simulationStyles.container__description}>
                Vitae sapien pellentesque habitant morbi
                nunc. Viverra aliquet  porttitor rhoncus 
                libero justo laoreet sit amet vitae.
            </div>
            <div className={simulationStyles.container__button}>
                <Link to='/join-hydra'><button>TRY IT NOW</button></Link>
            </div>
        </div>
    </div>
  )
}
