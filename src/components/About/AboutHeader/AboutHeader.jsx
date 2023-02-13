import React from 'react'
import aboutHeaderStyles from './AboutHeader.module.scss'

export default function AboutHeader() {
  return (
    <div className={aboutHeaderStyles.wrapper}>
      <div className={aboutHeaderStyles.container}>
        <div className={aboutHeaderStyles.introduction}>
          <div className={aboutHeaderStyles.introduction__text}>
            <h1>INTRODUCTION</h1>
          </div>
          <div className={aboutHeaderStyles.introduction__bottom}>
            <div className={aboutHeaderStyles.bottom_toHydraVr}>
              <h2>TO HYDRA VR</h2>
            </div>
            <div className={aboutHeaderStyles.bottom_rightArrow}>
            
            </div>
          </div>
        </div>
        <div className={aboutHeaderStyles.desciption}>
          <p>
            Vitae sapien pellentesque habitant morbi tristique senectus et netus et. Feugiat 
            nibh sed pulvinar proin gravida hendrerit lectus. Mi sit amet mauris commodo 
            quis imperdiet massa tincidunt nunc. Viverra aliquet eget sit amet tellus. Ornare 
            lectus sit amet est placerat in. Lectus magna fringilla urna porttitor rhoncus vitae.
          </p>
        </div>
      </div>
    </div>
  )
}
