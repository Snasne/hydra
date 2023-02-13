import React from 'react'
import leftInfoStyles from './LeftInfo.module.scss'
import { Link } from 'react-router-dom'

export default function LeftInfo() {
  return (
    <div className={leftInfoStyles.topInfo__leftInfo}>
        <div className={leftInfoStyles.leftInfo__header}>
            <div className={leftInfoStyles.header__topText}>
                <p className={leftInfoStyles.header__modifiedText}>Dive</p><p>Into The Depths</p>
            </div>
            <div className={leftInfoStyles.header__bottomText}>
                <p>Of</p><p className={leftInfoStyles.header__modifiedText}>Virtual Reality</p>
            </div>
        </div>
        <div className={leftInfoStyles.leftInfo__body}>
            <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                sed do eiusmod tempor incididunt ut labore et dolore 
                nisl tincidunt eget. Lectus mauris eros in vitae.
            </p>
        </div>
        <div className={leftInfoStyles.leftInfo__footer}>
            <Link to='/join-hydra'><button>BUILD YOUR WORLD</button></Link>
            <div className={leftInfoStyles.footer__arrowImage}>

            </div>
        </div>
    </div>
  )
}
