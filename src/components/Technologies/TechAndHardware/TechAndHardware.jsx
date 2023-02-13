import React from 'react'
import techAndHardwareStyles from './TechAndHardware.module.scss'

export default function TechAndHardware(props) {

  return (
    <div className={techAndHardwareStyles.wrapper}>
        <div className={techAndHardwareStyles.containerImage}>
            <h1>TECHNOLOGIES & HARDWARE</h1>
            <h2>USED BY HIDRA VR</h2>
        </div>
        <button className={techAndHardwareStyles.borderCircle} onClick={() => props.setIsRotate(!props.isRotate)}>
            <div className={techAndHardwareStyles.circle}>
                <div className={techAndHardwareStyles.bottomArrow} style={{transform: props.isRotate ? 'rotate(180deg)' : 'rotate(0deg)'}}>
            
                </div>
            </div>
        </button>
    </div>
  )
}
