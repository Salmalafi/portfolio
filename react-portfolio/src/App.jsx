import { useState } from 'react'
import styles from "./App.module.css";
import { NavBar } from './components/nav/NavBar';
import { Hero } from './components/hero/Hero';
function App() {
 
  return (
    <div className={styles.App}> <NavBar></NavBar>
<Hero></Hero>
     </div>

  )
}

export default App
