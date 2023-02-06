import style from './ContactInfo.module.css'

export const ContactInfo = () => {
  return (
    <div className={style.contactContainer}>
      <img className={style.contactImg} src={require('../../images/contactmeLetrero.png')} alt="Contact Me" />


      <div className={style.logoContainer}>
        <a href="https://github.com/Cindypsd" target="_blank" rel="noreferrer"><img src={require('../../images/githubIcon.png')} alt="GitHub logo" /></a> 
        <a  href="https://www.linkedin.com/in/cindypsdi/" target="_blank" rel="noreferrer"> <img src={require('../../images/LkdnIcon.png')} alt="Linkedin logo" /></a> 
      </div>
    </div>
  )
}
