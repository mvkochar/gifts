import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css'

const Header = () => {
    return (
        <header className='header'>
            <div className="header-info d-f jc-sb align-center">
                <div className="header-logo"><Link to='/'><img src="images/logo.svg" alt="header-logo" /></Link></div>
                <form className="header-search d-f">
                    <button className='header-search-btn'><img src="images/search.png" alt="search" /></button>
                    <input type="text" name="searchText" placeholder='Search' />
                </form>
                <div className="header-phone">+380 630 130 103</div>
                <div className="header-user"><img src="images/user.png" alt="user" /></div>
            </div>
            <div className="header-bar d-f jc-sb align-center">
                <nav>
                    <ul className="nav-list d-f">
                        <li className="nav-list-item"><Link to='sets' className='list-item-link'>Sets</Link></li>
                        <li className="nav-list-item"><Link to='all-goods' className='list-item-link'>All goods</Link></li>
                        <li className="nav-list-item"><Link to='sewing' className='list-item-link'>Sewing</Link></li>
                        <li className="nav-list-item"><Link to='production' className='list-item-link'>Production</Link></li>
                        <li className="nav-list-item"><Link to='information' className='list-item-link'>Information</Link></li>
                    </ul>
                </nav>
                <div className="header-shopping d-f align-center">
                    <div className="header-shopping-title">Shoppers with a discount - 25%</div>
                    <div className="header-shopping-img"><img src="images/header-shopping.png" alt="shopping" /></div>
                </div>
            </div>

        </header>
    )
}

export default Header