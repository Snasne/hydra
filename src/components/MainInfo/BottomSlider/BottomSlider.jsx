import React, { useState } from 'react'
import bottomSliderStyles from './BottomSlider.module.scss'

export default function BottomSlider() {
    const [isLocationOpened, setIsLocationOpened] = useState(true)
    const [isCallOpened, setIsCallOpened] = useState(false)
    const [isMailOpened, setIsMailOpened] = useState(false)

    const changeSlideRightArrow = () => {
        if (isLocationOpened === true && isCallOpened === false && isMailOpened === false) {
            setIsLocationOpened(false)
            setIsCallOpened(true)
            setIsMailOpened(false)
        } else if (isLocationOpened === false && isCallOpened === true && isMailOpened === false) {
            setIsLocationOpened(false)
            setIsCallOpened(false)
            setIsMailOpened(true)
        }
        else if (isLocationOpened === false && isCallOpened === false && isMailOpened === true) {
            setIsLocationOpened(true)
            setIsCallOpened(false)
            setIsMailOpened(false)
        }
    }
    const changeSlideLeftArrow = () => {
        if (isLocationOpened === true && isCallOpened === false && isMailOpened === false) {
            setIsLocationOpened(false)
            setIsCallOpened(false)
            setIsMailOpened(true)
        } else if (isLocationOpened === false && isCallOpened === true && isMailOpened === false) {
            setIsLocationOpened(true)
            setIsCallOpened(false)
            setIsMailOpened(false)
        }
        else if (isLocationOpened === false && isCallOpened === false && isMailOpened === true) {
            setIsLocationOpened(false)
            setIsCallOpened(true)
            setIsMailOpened(false)
        }
    }

  return (
    <div className={bottomSliderStyles.bottomInfo__container}>
        <button className={bottomSliderStyles.container__leftArrow} onClick={() => changeSlideLeftArrow()}></button>
        <div className={bottomSliderStyles.bottomInfo__location} style={{display: isLocationOpened ? "flex" : "none"}}>
            <div className={bottomSliderStyles.locationImage}>
            
            </div>
            <div className={bottomSliderStyles.location__text}>
                <p className={bottomSliderStyles.location__topText}>Pay Us a Visit</p>
                <p className={bottomSliderStyles.location__bottomText}>Union St, Seattle, WA 98101, United States</p>
            </div>
        </div>
        <div className={bottomSliderStyles.bottomInfo__call} style={{display: isCallOpened ? "flex" : "none"}}>
            <div className={bottomSliderStyles.callImage}>
            
            </div>
            <div className={bottomSliderStyles.call__text}>
                <p className={bottomSliderStyles.call__topText}>Give Us a Call</p>
                <p className={bottomSliderStyles.call__bottomText}>(110) 1111-1010</p>
            </div>
        </div>
        <div className={bottomSliderStyles.bottomInfo__message} style={{display: isMailOpened ? "flex" : "none"}}>
            <div className={bottomSliderStyles.messageImage}>
            
            </div>
            <div className={bottomSliderStyles.message__text}>
                <p className={bottomSliderStyles.message__topText}>Send Us a Message</p>
                <p className={bottomSliderStyles.message__bottomText}>Contact@HydraVTech.com</p>
            </div>
        </div>
        <button className={bottomSliderStyles.container__rightArrow} onClick={() => changeSlideRightArrow()}></button>
    </div>
  )
}
