import logo1 from './images/linkedin.svg'
import logo2 from './images/instagram.svg';
import logo3 from './images/mail.svg';
import logo4 from './images/whatsapp.svg';
import styles from './Footer.module.css';
const Footer = () =>{
  return(
    <footer className={styles.footerBg}>
      <div className={styles.footerContainer}>
        <span>Gostou do que viu? Entre em contato para transformar ideias em realidade!</span>
        <div className={styles.footerLinks}>
          <div className={styles.footerLink}>
            <img src={logo1} alt="Linkedin" />
            <a href="https://www.linkedin.com/in/adrya-julia-a74030229/" className={styles.footerTxt}>Adrya Julia</a>
          </div>
          <div className={styles.footerLink}>
            <img src={logo2} alt="Instagram" />
            <a href="https://www.instagram.com/_adryajulia/" className={styles.footerTxt}>@_adryajulia</a>
          </div>
          <div className={styles.footerLink}>
            <img src={logo3} alt="Email"/>
            <a href="mailto:adryajulia15@gmail.com" className={styles.footerTxt}>adryajulia15@gmail.com</a>
          </div>
          <div className={styles.footerLink}>
            <img src={logo4}  alt='Whatsapp/Telefone'/>
            <a href="https://wa.me/5579988718687" className={styles.footerTxt}>(79)98871-8687</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
export default Footer