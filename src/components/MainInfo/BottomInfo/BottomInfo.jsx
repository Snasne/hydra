import React from 'react'
import bottomInfoStyles from './BottomInfo.module.scss'

export default function BottomInfo() {
  return (
    <div className={bottomInfoStyles.bottomInfo__container}>
        <div className={bottomInfoStyles.bottomInfo__location}>
            <div className={bottomInfoStyles.locationImage}>
            
            </div>
            <div className={bottomInfoStyles.location__text}>
                <p className={bottomInfoStyles.location__topText}>Pay Us a Visit</p>
                <p className={bottomInfoStyles.location__bottomText}>Union St, Seattle, WA 98101, United States</p>
            </div>
        </div>
        <div className={bottomInfoStyles.bottomInfo__call}>
            <div className={bottomInfoStyles.callImage}>
            
            </div>
            <div className={bottomInfoStyles.call__text}>
                <p className={bottomInfoStyles.call__topText}>Give Us a Call</p>
                <p className={bottomInfoStyles.call__bottomText}>(110) 1111-1010</p>
            </div>
        </div>
        <div className={bottomInfoStyles.bottomInfo__message}>
            <div className={bottomInfoStyles.messageImage}>
            
            </div>
            <div className={bottomInfoStyles.message__text}>
                <p className={bottomInfoStyles.message__topText}>Send Us a Message</p>
                <p className={bottomInfoStyles.message__bottomText}>Contact@HydraVTech.com</p>
            </div>
        </div>
    </div>
  )
}
