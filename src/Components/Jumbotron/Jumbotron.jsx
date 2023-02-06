import { ContactInfo } from '../ContactInfo/ContactInfo'
import { Skills } from '../Skills/Skills'
import style from './Jumbotron.module.css'

export const Jumbotron = () => {
  return (
    <div className={style.jumbotronContainer}>
      <img className={style.jumbotronImg} src={require('../../images/Foto.png')} alt="" />
      <h1>Hola! I'm Cindy Posada</h1>
      <p>I'm a <span>Full Stack Developer</span>, who has a passion for coding. I have a keen interest in learning and creating new technologies, so I'm always up for a challenge! I've worked on a variety of personal projects.</p>

      <Skills/>
      <ContactInfo/>
    </div>
  )
}
