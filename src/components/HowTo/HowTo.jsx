import React, { useState } from 'react'
import howToStyles from './HowTo.module.scss'
import HowToHeader from './HowToHeader/HowToHeader'
import ProcessCard from './ProcessCard/ProcessCard'

export default function HowTo() {

    const cardsDatas = [
        {
            id: 0,
            number: '01',
            topText: '3D Conception',
            bottomText: '& Design'
        },
        {
            id: 1,
            number: '02',
            topText: 'Interaction',
            bottomText: 'Design'
        },
        {
            id: 2,
            number: '03',
            topText: 'VR World',
            bottomText: 'User Testing'
        },
        {
            id: 3,
            number: '04',
            topText: 'Hydra VR',
            bottomText: 'Deploy'
        },
    ]

    const [numberCard, setNumberCard] = useState(0)

    const changeNumberCardRightArrow = () => {
        if (numberCard === 3) {
            setNumberCard(0);
        } else {
            setNumberCard(numberCard + 1);
        }
    }

    const changeNumberCardLeftArrow = () => {
        if (numberCard === 0) {
            setNumberCard(3);
        } else {
            setNumberCard(numberCard - 1);
        }
    }

  return (
    <div className={howToStyles.wrapper}>
        <div className={howToStyles.container}>
            <div className={howToStyles.header}>
                <HowToHeader/>
            </div>
            <div className={howToStyles.processSection}>
                {
                    cardsDatas.map((cardsData) => 
                        <ProcessCard number={cardsData.number} topText={cardsData.topText} bottomText={cardsData.bottomText} key={cardsData.id}/>
                    )
                }
            </div>
            <div className={howToStyles.slider}>
                <button className={howToStyles.slider__borderLeftArrow} onClick={() => changeNumberCardLeftArrow()}> 
                    <div className={howToStyles.borderLeftArrow__background}>
                        <div className={howToStyles.background__leftArrow}>

                        </div>
                    </div>
                </button>

                <div className={howToStyles.slider__card}>
                    <ProcessCard number={cardsDatas[numberCard].number} topText={cardsDatas[numberCard].topText} bottomText={cardsDatas[numberCard].bottomText}/>
                </div>

                <button className={howToStyles.slider__borderRightArrow}>
                    <div className={howToStyles.borderRightArrow__background}>
                        <div className={howToStyles.background__rightArrow} onClick={() => changeNumberCardRightArrow()}>

                        </div>
                    </div>
                </button>
            </div>
        </div>
    </div>
  )
}
