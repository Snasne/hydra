import React, { useState } from 'react'
import Education from './Education/Education'
import Outdoor from './Outdoor/Outdoor'
import SelfCare from './SelfCare/SelfCare'
import servicesStyles from './Services.module.scss'
import ServicesHeader from './ServicesHeader/ServicesHeader'
import Simulation from './Simulation/Simulation'

export default function Services() {

  const [isSimulationOpened, setIsSimulationOpened] = useState(true);
  const [isEducationOpened, setIsEducationOpened] = useState(false);
  const [isSelfCareOpened, setIsSelfCareOpened] = useState(false);
  const [isOutdoorOpened, setIsOutdoorOpened] = useState(false);

  const changeSlideRightArrow = () => {
    if (isSimulationOpened === true && isEducationOpened === false && isSelfCareOpened === false && isOutdoorOpened === false) {
      setIsSimulationOpened(false)
      setIsEducationOpened(true)
      setIsSelfCareOpened(false)
      setIsOutdoorOpened(false)
    } else if (isSimulationOpened === false && isEducationOpened === true && isSelfCareOpened === false && isOutdoorOpened === false) {
      setIsSimulationOpened(false)
      setIsEducationOpened(false)
      setIsSelfCareOpened(true)
      setIsOutdoorOpened(false)
    } else if (isSimulationOpened === false && isEducationOpened === false && isSelfCareOpened === true && isOutdoorOpened === false) {
      setIsSimulationOpened(false)
      setIsEducationOpened(false)
      setIsSelfCareOpened(false)
      setIsOutdoorOpened(true)
    } else if (isSimulationOpened === false && isEducationOpened === false && isSelfCareOpened === false && isOutdoorOpened === true) {
      setIsSimulationOpened(true)
      setIsEducationOpened(false)
      setIsSelfCareOpened(false)
      setIsOutdoorOpened(false)
  }
}
const changeSlideLeftArrow = () => {
  if (isSimulationOpened === true && isEducationOpened === false && isSelfCareOpened === false && isOutdoorOpened === false) {
    setIsSimulationOpened(false)
    setIsEducationOpened(false)
    setIsSelfCareOpened(false)
    setIsOutdoorOpened(true)
  } else if (isSimulationOpened === false && isEducationOpened === true && isSelfCareOpened === false && isOutdoorOpened === false) {
    setIsSimulationOpened(true)
    setIsEducationOpened(false)
    setIsSelfCareOpened(false)
    setIsOutdoorOpened(false)
  } else if (isSimulationOpened === false && isEducationOpened === false && isSelfCareOpened === true && isOutdoorOpened === false) {
    setIsSimulationOpened(false)
    setIsEducationOpened(true)
    setIsSelfCareOpened(false)
    setIsOutdoorOpened(false)
  } else if (isSimulationOpened === false && isEducationOpened === false && isSelfCareOpened === false && isOutdoorOpened === true) {
    setIsSimulationOpened(false)
    setIsEducationOpened(false)
    setIsSelfCareOpened(true)
    setIsOutdoorOpened(false)
  }
}

  return (
    <div className={servicesStyles.wrapper}>
        <div className={servicesStyles.wrapper__header}>
          <ServicesHeader/>
        </div>
        <div className={servicesStyles.wrapper__cards}>
          <div className={servicesStyles.simulationCard}>
            <Simulation/>
          </div>
          <div className={servicesStyles.educationCard}>
            <Education/>
          </div>
          <div className={servicesStyles.selfCareCard}>
            <SelfCare/>
          </div>
          <div className={servicesStyles.outdoorCard}>
            <Outdoor/>
          </div>
        </div>
        <div className={servicesStyles.wrapper_sliderCards}>
          <button className={servicesStyles.wrapper__borderLeftArrow} onClick={() => changeSlideLeftArrow()}>
            <div className={servicesStyles.borderLeftArrow__background}>
              <div className={servicesStyles.background__leftArrow}>

              </div>
            </div>
          </button>
          <div className={servicesStyles.cardsSlider}>
            <div className={servicesStyles.cardsSlider__simulationCard} style={{display: isSimulationOpened ? 'flex' : 'none'}}>
              <Simulation/>
            </div>
            <div className={servicesStyles.cardsSlider__educationCard} style={{display: isEducationOpened ? 'flex' : 'none'}}>
              <Education/>
            </div>
            <div className={servicesStyles.cardsSlider__selfCareCard} style={{display: isSelfCareOpened ? 'flex' : 'none'}}>
              <SelfCare/>
            </div>
            <div className={servicesStyles.cardsSlider__outdoorCard} style={{display: isOutdoorOpened ? 'flex' : 'none'}}>
              <Outdoor/>
            </div>
          </div>
          <button className={servicesStyles.wrapper__borderRightArrow} onClick={() => changeSlideRightArrow()}>
            <div className={servicesStyles.borderRightArrow__background}>
              <div className={servicesStyles.background__rightArrow}>

              </div>
            </div>
          </button>
        </div>
    </div>
  )
}
