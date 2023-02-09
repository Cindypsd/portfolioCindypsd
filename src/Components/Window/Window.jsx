
import style from './Window.module.css'


const portfolio = [
  {
    num:1,
    name: 'CRUD APP',
    gif: 'CRUDAPP',
    skills: 'HTML/CSS, Vanilla JS, Local Storage ',
    code: 'https://github.com/Cindypsd/CRUD_CindyPosada',
    deploy: 'https://cindypsd.github.io/CRUD_CindyPosada/'
  },
  {
    num: 2,
    name: 'Rick & Morty API',
    gif: 'rickandmorty',
    skills: 'REACT, REDUX, CSS, JS',
    code: 'https://github.com/Cindypsd/rickyandmorty',
    deploy: 'https://rickandmorty-api-cindypsd.netlify.app/'
  },
  {
    num: 3,
    name: 'Countries API',
    gif: 'countries',
    skills: 'NODE JS, SQL, PostgreSql, REACT, REDUX, CSS, JS',
    code: 'https://github.com/Cindypsd/countriesApiCindyPsd'
  }

] 


export const Window =  ({selectFolder}) => {

 const projectInfo =   portfolio && portfolio.filter(p=> p.name === selectFolder)
 

  return (
    <div className={style.Container}>
      <h2 className={style.projectName}>{projectInfo[0].name}</h2>
      

      <div className={style.extraInfoContainer}>
        <p>Code → </p> <a target="_blank" href={projectInfo[0].code} rel="noreferrer"><img src={require('../../images/githubIcon.png')} alt="GitHub logo" /></a>
        <p>Deploy → </p> <a target="_blank" href={projectInfo[0].deploy} rel="noreferrer"><img src={require('../../images/webIco.png')} alt="GitHub logo" /></a>
      </div>

      <p className={style.skillsp}>Skills: <span>{projectInfo[0].skills}</span></p>


      <div className={style.windowContainer}>
        <img className={style.widowGif} src={require(`../../gifs/${projectInfo[0].gif}.gif`)} alt="Window img" />
      </div>

    </div>
  )
}
