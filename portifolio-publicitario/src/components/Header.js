import styles from './Header.module.css'
import ajBrand from './images/ajBrand.png'
const Header = () =>{
  return(
    <header className={styles.menu} >
      <nav>
        <ul className={styles.menuContainer}>
          <li><a href='#main'>INÍCIO</a></li>
          <li><a href="#about">SOBRE MIM</a></li>
          <img className={styles.logoImg}src={ajBrand} alt="logo" />
          <li><a href="#work">TRABALHOS</a></li>
          <li><a href="#footer">CONTATO</a></li>
        </ul>
      </nav>
    </header>
  )
}

export default Header;