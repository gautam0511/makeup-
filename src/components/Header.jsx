import React from 'react'
import css from './Header.module.css'
import Logo from '../assets/logo.png'
import {CgShoppingBag} from 'react-icons/cg'
const Header = () => {
  return (
    <div className={css.container}>
        <div className={css.logo}>
            <img src={Logo}></img>
            <span>amazon</span>
        </div>
        <div className={css.right}>
            <div className={css.menu}>
                <ul className={css.menu}>
                    <li>Collaborations</li>
                    <li>Brands</li>
                    <li>News</li>
                    <li>Sales</li>
                    <li>ENG</li>
                </ul>
            </div>
            <input type="text" placeholder='search' className={css.search}></input>
            <CgShoppingBag className={css.cart}/>
        </div>
    </div>
    
  )
}

export default Header