import React from 'react'
import processCardStyles from './ProcessCard.module.scss'

export default function ProcessCard(props) {
  return (
    <div className={processCardStyles.wrapper}>
        <div className={processCardStyles.borderCircle}>
            <div className={processCardStyles.circle}>
                <h1>{props.number}</h1>
            </div>
        </div>
        <div className={processCardStyles.container}>
            <div className={processCardStyles.container_rightArrow}>
            
            </div>
            <div className={processCardStyles.container__description}>
                <h1>{props.topText}</h1>
                <h2>{props.bottomText}</h2>
            </div>
        </div>
    </div>
  )
}
