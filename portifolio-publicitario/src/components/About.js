import styles from './About.module.css'
import about from './images/about.png'
const About = () =>{
  return(
    <section className={styles.about} id="about">
      <img className={styles.aboutImg} src={about} alt="Adrya usando o computador" />
      <div className={styles.aboutTxt}>
        <h2 className={styles.aboutH2}>Olá, sou Adrya.</h2>
        <p className={styles.aboutP}>
          Uma jovem estudante de Comunicação Social - Publicidade e Propaganda. Com 21 anos de idade, sou movida por uma paixão intensa pela comunicação e todas as suas facetas.
        </p>
        <p className={styles.aboutP}>
          Acredito que a comunicação seja a chave para expressão e conexão, tanto em âmbito pessoal quanto profissional e empresarial. Estou constantemente em busca de oportunidades para desenvolver meu conhecimento e habilidades nessa área fascinante.
        </p>
        <p className={styles.aboutP}>
          Vamos desbloquear o seu sucesso juntos e criar conexões autenticas.
        </p>
      </div>
    </section>
  )
}

export default About;