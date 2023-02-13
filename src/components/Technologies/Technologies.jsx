import React, { useState } from 'react'
import AdaptiveTechElements from './AdaptiveTechElements/AdaptiveTechElements';
import TechAndHardware from './TechAndHardware/TechAndHardware'
import TechElements from './TechElements/TechElements'
import technologiesStyles from './Technologies.module.scss'

export default function Technologies() {

  const [isRotate, setIsRotate] = useState(false);

  return (
    <div className={technologiesStyles.wrapper}>
      <div className={technologiesStyles.container}>
        <div className={technologiesStyles.container__technologiesAndHardware}>
          <TechAndHardware isRotate={isRotate} setIsRotate={setIsRotate}/>
        </div>
        <div className={technologiesStyles.container__techElements}>
          <TechElements isRotate={isRotate} setIsRotate={setIsRotate}/>
        </div>
        <div className={technologiesStyles.container__techElementsAdaptive}>
          <AdaptiveTechElements/>
        </div>
      </div>
    </div>
  )
}
