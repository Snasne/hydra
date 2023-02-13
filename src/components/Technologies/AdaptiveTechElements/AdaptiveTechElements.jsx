import React, { useState } from 'react'
import adaptiveTechElementsStyles from './AdaptiveTechElements.module.scss'

export default function AdaptiveTechElements() {

    const [isUnrealEngineOpened, setIsUnrealEngineOpened] = useState(true);
    const [isUnityOpened, setIsUnityOpened] = useState(false);
    const [isOculusOpened, setIsOculusOpened] = useState(false);
    const [isViveOpened, setIsViveOpened] = useState(false);

    const changeSlideRightArrow = () => {
        if (isUnrealEngineOpened === true && isUnityOpened === false && isOculusOpened === false && isViveOpened === false) {
        setIsUnrealEngineOpened(false)
        setIsUnityOpened(true)
        setIsOculusOpened(false)
        setIsViveOpened(false)
        } else if (isUnrealEngineOpened === false && isUnityOpened === true && isOculusOpened === false && isViveOpened === false) {
        setIsUnrealEngineOpened(false)
        setIsUnityOpened(false)
        setIsOculusOpened(true)
        setIsViveOpened(false)
        } else if (isUnrealEngineOpened === false && isUnityOpened === false && isOculusOpened === true && isViveOpened === false) {
        setIsUnrealEngineOpened(false)
        setIsUnityOpened(false)
        setIsOculusOpened(false)
        setIsViveOpened(true)
        } else if (isUnrealEngineOpened === false && isUnityOpened === false && isOculusOpened === false && isViveOpened === true) {
        setIsUnrealEngineOpened(true)
        setIsUnityOpened(false)
        setIsOculusOpened(false)
        setIsViveOpened(false)
        }
    }
    const changeSlideLeftArrow = () => {
        if (isUnrealEngineOpened === true && isUnityOpened === false && isOculusOpened === false && isViveOpened === false) {
            setIsUnrealEngineOpened(false)
            setIsUnityOpened(false)
            setIsOculusOpened(false)
            setIsViveOpened(true)
        } else if (isUnrealEngineOpened === false && isUnityOpened === true && isOculusOpened === false && isViveOpened === false) {
            setIsUnrealEngineOpened(true)
            setIsUnityOpened(false)
            setIsOculusOpened(false)
            setIsViveOpened(false)
        } else if (isUnrealEngineOpened === false && isUnityOpened === false && isOculusOpened === true && isViveOpened === false) {
            setIsUnrealEngineOpened(false)
            setIsUnityOpened(true)
            setIsOculusOpened(false)
            setIsViveOpened(false)
        } else if (isUnrealEngineOpened === false && isUnityOpened === false && isOculusOpened === false && isViveOpened === true) {
            setIsUnrealEngineOpened(false)
            setIsUnityOpened(false)
            setIsOculusOpened(true)
            setIsViveOpened(false)
        }
    }      

  return (
    <div className={adaptiveTechElementsStyles.wrapper}>
        <div className={adaptiveTechElementsStyles.container}>
            <button className={adaptiveTechElementsStyles.borderLeftArrow} onClick={() => changeSlideLeftArrow()}>
                <div className={adaptiveTechElementsStyles.circleLeftArrow}>
                    <div className={adaptiveTechElementsStyles.leftArrow}>
                
                    </div>
                </div>
            </button>

            <div className={adaptiveTechElementsStyles.unrealEngine} style={{display: isUnrealEngineOpened ? 'flex' : 'none'}}></div>
            <div className={adaptiveTechElementsStyles.unity} style={{display: isUnityOpened ? 'flex' : 'none'}}></div>
            <div className={adaptiveTechElementsStyles.oculus} style={{display: isOculusOpened ? 'flex' : 'none'}}></div>
            <div className={adaptiveTechElementsStyles.vive} style={{display: isViveOpened ? 'flex' : 'none'}}></div>

            <button className={adaptiveTechElementsStyles.borderRightArrow} onClick={() => changeSlideRightArrow()}>
                <div className={adaptiveTechElementsStyles.circleRightArrow}>
                    <div className={adaptiveTechElementsStyles.rightArrow}>
                
                    </div>
                </div>
            </button>
        </div>
    </div>
  )
}
