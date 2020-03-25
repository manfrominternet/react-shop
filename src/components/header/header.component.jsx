import React from 'react'
import { Link } from 'react-router-dom'
import { ReactComponent as Logo } from "../../assets/crown.svg";
import './header.styles.scss'

const Header = () => (
    <div className='header'>
        <Link classname='logo-container' to="/">
            <Logo className='logo' />
        </Link>
     <div className='options'>
     <Link classname='option' to="/shop" style={{ marginLeft: "auto", marginRight: "10px"}}>SHOP </Link>           
     <Link classname='option' to="/shop"> CONTACT</Link>
     </div>
    </div>

)

export default Header;