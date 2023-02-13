import React from 'react'
import techElements from './TechElements.module.scss'

export default function TechElements(props) {
  return (
    <div className={techElements.container} style={{opacity: props.isRotate ? '0' : '100'}}>
        <div className={techElements.unrealEngine}>
        
        </div>
        <div className={techElements.unity}>
        
        </div>
        <div className={techElements.oculus}>
        
        </div>
        <div className={techElements.vive}>
        
        </div>
    </div>
  )
}
