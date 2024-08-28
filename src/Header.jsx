import React from 'react'
import { NavLink } from 'react-router-dom'
import AboutApp from './AboutApp'
import RoutesCard from './RoutesCard'
import styles from "./styles/Header.module.css"

const Header = () => {
  return (
    <div className={styles.headerContainer}>
      <NavLink to="/" className={styles.navLink} element={<RoutesCard/>}>Home</NavLink>
      <NavLink to="/about" className={styles.navLink} element={<AboutApp/>}>About</NavLink>
    </div>
  )
}

export default Header
