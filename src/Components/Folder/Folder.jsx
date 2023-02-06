
import style from './Folder.module.css'

export const Folder = ({name,num, selected}) => {

  return (
    <div className={style.folderContainer}  >
          <img 
            name={name} 
            onClick={(e)=>selected(e.target.name)} 
            src={require(`../../images/folderColor${num}.png`)} 
          
            alt="Folder img" 
          />
          <p>{name}</p>
    </div>
  )
}


