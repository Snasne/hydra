import React from 'react'
import servicesHeaderStyles from './ServicesHeader.module.scss'

export default function ServicesHeader() {
  return (
    <div className={servicesHeaderStyles.wrapper}>
      <div className={servicesHeaderStyles.container}>
        <div className={servicesHeaderStyles.introduction}>
          <div className={servicesHeaderStyles.introduction__text}>
            <h1>WHY BUILD?</h1>
          </div>
          <div className={servicesHeaderStyles.introduction__bottom}>
            <div className={servicesHeaderStyles.bottom_toHydraVr}>
              <h2>WITH HYDRA?</h2>
            </div>
            <div className={servicesHeaderStyles.bottom_rightArrow}>
            
            </div>
          </div>
        </div>
        <div className={servicesHeaderStyles.desciption}>
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
