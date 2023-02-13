import React from 'react'
import aboutStyles from './About.module.scss'
import AboutBodyText from './AboutBodyText/AboutBodyText'
import AboutHeader from './AboutHeader/AboutHeader'

export default function About() {
  return (
    <div className={aboutStyles.wrapper}>
        <div className={aboutStyles.container}>
            <AboutHeader/>
            <div className={aboutStyles.body}>
                <div className={aboutStyles.body__image}>

                </div>
                <div className={aboutStyles.body__middleText}>
                  <AboutBodyText/>
                </div>
            </div>
        </div>
    </div>
  )
}
