import React, {useState} from "react";
import styles from './NavBar.module.css';
import { getImageUrl } from "../../utils";
export const NavBar = () =>{
    const [menuOpen, setMenuOpen]=useState(false);
return <nav className={styles.NavBar}>
    <a href="/" className={styles.title}>Portfolio</a>
    <div className={styles.menu}> 
        <img className={styles.image} src={menuOpen ? getImageUrl("nav/closeIcon.png") : getImageUrl("nav/menuIcon.png")}
      onClick={()=> setMenuOpen(!menuOpen)}  />
       <ul
          className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`}
          onClick={() => setMenuOpen(false)}
        >
            <li> <a href="#About">About</a></li>
            <li> <a href="#experience">Experience</a></li>
            <li> <a href="#projects">Projetcs</a></li>
            <li> <a href="contact">Contact</a></li>
    </ul>
    </div>
</nav>;
}