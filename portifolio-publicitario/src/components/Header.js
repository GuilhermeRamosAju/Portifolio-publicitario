import styles from './Header.module.css'
import ajBrand from './images/ajBrand.png'
const Header = () =>{
  return(
    <header className={styles.menu}>
      <nav>
        <ul className={styles.menuContainer}>
          <li><a href='#'>INÍCIO</a></li>
          <li><a href="#">SOBRE MIM</a></li>
          <a href="#" ><img id={styles.logoImg}src={ajBrand} alt="logo" /></a>
          <li><a href="#">TRABALHOS</a></li>
          <li><a href="#">CONTATO</a></li>
        </ul>
      </nav>
    </header>

  )
}

export default Header;