import React from 'react'
import joinStyles from './Join.module.scss'

export default function Join() {
  return (
    <div className={joinStyles.wrapper}>
        <div className={joinStyles.container}>
            <div className={joinStyles.header}>
                <h1>JOIN HYDRA</h1>
                <div className={joinStyles.header__horizontalLine}>

                </div>
                <div className={joinStyles.header__bottomText}>
                    <h1>Let's Build</h1>
                    <h2>Your VR Experience</h2>
                </div>
            </div>
            <div className={joinStyles.fullName}>
                <input type="text" placeholder='First Name'/>
                <input type="text" placeholder='Last Name'/>
            </div>
            <div className={joinStyles.contacts}>
                <input type="text" placeholder='Email'/>
                <input type="number" placeholder='Phone Number'/>
            </div>
            <div className={joinStyles.subject}>
                <input type="text" placeholder='Subject'/>
            </div>
            <div className={joinStyles.description}>
                <textarea type="text" placeholder='Tell Us Something...'></textarea>
            </div>
            <button>SEND TO HYDRA</button>
        </div>
    </div>
  )
}
