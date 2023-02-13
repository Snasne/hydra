import React from 'react'
import howToHeaderStyles from './HowToHeader.module.scss'

export default function HowToHeader() {
  return (
    <div className={howToHeaderStyles.wrapper}>
      <div className={howToHeaderStyles.container}>
        <div className={howToHeaderStyles.introduction}>
          <div className={howToHeaderStyles.introduction__text}>
            <h1>HOW WE BUILD?</h1>
          </div>
          <div className={howToHeaderStyles.introduction__bottom}>
            <div className={howToHeaderStyles.bottom_toHydraVr}>
              <h2>WITH HYDRA VR?</h2>
            </div>
            <div className={howToHeaderStyles.bottom_rightArrow}>
            
            </div>
          </div>
        </div>
        <div className={howToHeaderStyles.desciption}>
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
