import styles from './Header.module.css'
import ajBrand from './images/ajBrand.png'
const Header = () =>{
  return(
    <header className={styles.menu} >
      <nav>
        <ul className={styles.menuContainer}>
          <li><a href='#main'>INÍCIO</a></li>
          <li><a href="#about">SOBRE MIM</a></li>
          <a href="#"><img className={styles.logoImg}src={ajBrand} alt="logo" /></a>
          <li><a href="#work">TRABALHOS</a></li>
          <li><a href="">CONTATO</a></li>
        </ul>
      </nav>
    </header>
  )
}

export default Header;