
import { useState } from 'react'
import { Folder } from '../Folder/Folder'
import { Window } from '../Window/Window'
import style from './MenuPortfolio.module.css'

export const MenuPortfolio = ({portfolio}) => {

  const [selectFolder, setSelectFolder] = useState('CRUD APP')

  const selected = (folderName) => setSelectFolder(folderName);

 

  return (

    <div className={style.portfolioContainer}>
     
      <div className={style.portfolioTitle}>
        <img className={style.contactImg} src={require('../../images/portfolioLetrero.png')} alt="Portfolio" />
      </div>

      <div className={style.foldersContainer}>
          {
            portfolio.map( p=> <Folder name={p.name} num={p.num} key={p.name} selected={selected}/>)
          }
      </div>

      <Window selectFolder={selectFolder}/>
    

    </div>
  )
}
