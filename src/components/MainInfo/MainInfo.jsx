import React from 'react'
import BottomInfo from './BottomInfo/BottomInfo'
import BottomSlider from './BottomSlider/BottomSlider'
import LeftInfo from './LeftInfo/LeftInfo'
import mainInfoStyles from './MainInfo.module.scss'

export default function MainInfo() {
  return (
    <div className={mainInfoStyles.wrapper}>
        <div className={mainInfoStyles.wrapper__background}></div>
        <div className={mainInfoStyles.container}>
            <div className={mainInfoStyles.container__topInfo}>
                <div className={mainInfoStyles.topInfo__leftInfo}>
                    <LeftInfo/>  
                </div>
                <div className={mainInfoStyles.topInfo__rightInfo}>
                    <div className={mainInfoStyles.rightInfo__borderContainer}>
                        <div className={mainInfoStyles.borderContainer__image}>

                        </div>
                    </div>
                </div>
            </div>
            <div className={mainInfoStyles.container__bottomInfo}>
                <BottomInfo/>
            </div>
            <div className={mainInfoStyles.container__bottomSlider}>
                <BottomSlider/>
            </div>
        </div>
    </div>
  )
}
