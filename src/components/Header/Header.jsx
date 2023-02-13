import React, { useState } from 'react'
import headerStyles from './Header.module.scss'
import { Link } from 'react-router-dom'

export default function Header() {

  const [isOpenMenu, setIsOpenMenu] = useState(false);

  const middleTextdatas = [
    {
      name: "ABOUT",
      path: "/about",
      id: 0,
    },
    {
      name: "SERVICES",
      path: "/services",
      id: 1,
    },
    {
      name: "TECHNOLOGIES",
      path: "/technologies",
      id: 2,
    },
    {
      name: "HOW TO",
      path: "/how-to",
      id: 3,
    },
  ]

  const rightTextdatas = [
    {
      name: "JOIN HYDRA",
      path: "/join-hydra",
      id: 0,
      class: headerStyles.rightInfo__rightButton
    },
  ]

  return (
      <div className={headerStyles.wrapper}>
        <div className={headerStyles.container}>
          <div className={headerStyles.leftInfo}>
            <Link to='/'>
              <div className={headerStyles.leftInfo__hydraImage}>
              
              </div>
            </Link>
            <div className={headerStyles.leftInfo__hydraText}>
            
            </div>
          </div>
          <div className={headerStyles.middleInfo}>
            {
              middleTextdatas.map((middleTextdata) => 
                <Link to={middleTextdata.path} key={middleTextdata.id}>
                  <button>{middleTextdata.name}</button>
                </Link>
              )
            }
          </div>
          <div className={headerStyles.rightInfo}>
            {
              rightTextdatas.map((rightTextdata) => 
                <Link to={rightTextdata.path} key={rightTextdata.id}>
                  <button className={rightTextdata.class}>{rightTextdata.name}</button>
                </Link>
              )
            }
          </div>
        </div>
        

        
        <div className={headerStyles.adaptiveContainer}>
            <button className={headerStyles.adaptiveContainer__openButton} onClick={() => setIsOpenMenu(!isOpenMenu)} style={{right: isOpenMenu ? '250px' : '0'}}>
              <div className={headerStyles.openButton__containerForSpans}>
                <span></span>
                <span className={headerStyles.containerForSpans__middlespan}></span>
                <span></span>
              </div>
            </button>
            <div className={headerStyles.adaptiveContainer__openedInfo} style={{right: isOpenMenu ? '0' : '-250px', display: isOpenMenu ? 'flex' : 'none'}}>
              <div className={headerStyles.openedInfo__headerInfo}>
                <Link to='/'>
                  <div className={headerStyles.headerInfo__logoImage}>
                
                  </div>
                </Link>
                <div className={headerStyles.headerInfo__textInfo}>
              
                </div>
              </div>
              <div className={headerStyles.openedInfo__bodyInfo}>
                <div className={headerStyles.bodyInfo__middleButtons}>
                  {
                    middleTextdatas.map((middleTextdata) => 
                      <Link to={middleTextdata.path} key={middleTextdata.id}>
                        <button>{middleTextdata.name}</button>
                      </Link>
                    )
                  }
                </div>
                <div className={headerStyles.bodyInfo__endButtons}>
                    <Link to='/join-hydra'>
                      <button className={headerStyles.endButtons__secondButton}>JOIN HYDRA</button>
                    </Link>
                </div>
              </div>
            </div>
        </div>
      </div>
  )
}
