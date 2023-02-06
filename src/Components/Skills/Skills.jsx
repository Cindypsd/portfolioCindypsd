import { useState } from 'react'

import style from './Skills.module.css'

export const Skills = () => {

  const [clicked, setClicked] = useState(false)

  return (
    <div className={style.skillsContainer}>

      {
        clicked && 
          <div className={style.windowContainer}>
            <button className={style.windowButton}onClick={()=>setClicked(false)}>X</button>
            <img className={style.techWindowImg} src={require('../../images/techWindow.png')} alt="Tech Skills" />
          </div>
      
      }


      <div className={style.sheetsContainer}>
        <img className={style.skillsImg} onClick={()=>setClicked(true)}src={require('../../images/hojaTech.png')} alt="English Skills" />

        <a href="https://www.efset.org/cert/mtFXKY" target="_blank" rel="noreferrer">
          <img className={style.skillsImg} src={require('../../images/englishLetrero.png')} alt="English Skills" name="english" />
        </a>
      </div>

    </div>
  )
}
