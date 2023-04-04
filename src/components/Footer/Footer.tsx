import React from 'react'
import './Footer.css'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <footer className='footer'>
            <div className="footer-box d-f jc-sb">
                <div className="footer-info">
                    <div className="footer-logo"><img src="images/logo.svg" alt="logo" /></div>
                    <div className="footer-info-desc">Fresh breath in corporate life and corporate life fresh breath</div>
                    <div className="footer-info-phone">+380 630 130 103</div>
                    <div className="footer-info-email">example@gmail.com</div>
                    <div className="footer-info-social d-f">
                        <div><img src="images/facebook.png" alt="facebook" /></div>
                        <div><img src="images/instagram.png" alt="instagram" /></div>
                        <div><img src="images/linkedIn.png" alt="linkedin" /></div>
                    </div>
                </div>
                <div className="footer-links">
                    <div className="footer-title">Categories</div>
                    <ul className="footer-list">
                        <li className="footer-list-item"><Link to='sewing'>Sewing</Link></li>
                        <li className="footer-list-item"><Link to='all-goods'>All goods</Link></li>
                        <li className="footer-list-item"><Link to='sets'>Sets</Link></li>
                        <li className="footer-list-item"><Link to='production'>Production</Link></li>
                    </ul>
                </div>
                <div className="footer-links">
                    <div className="footer-title">Information</div>
                    <ul className="footer-list">
                        <li className="footer-list-item"><a href="">About Us</a></li>
                        <li className="footer-list-item"><a href="">FAQ</a></li>
                        <li className="footer-list-item"><a href="">Contacts</a></li>
                    </ul>
                </div>
                <div className="footer-contact">
                    <div className="footer-title">Contact with manager</div>
                    <div className="footer-contact-desc">
                        Have a question that hasn't been answered? Leave a contact and our manager will contact you
                    </div>
                    <form className="footer-contact-fm d-f">
                        <div><input type="tel" name="phone" placeholder='Phone number' /></div>
                        <button type="submit"><img src="images/arrow2.png" alt="arrow2" /></button>
                    </form>
                </div>
            </div>
            <div className="footer-rights">&copy; 2022 . All rights reserved. Privacy Policy</div>
        </footer>
    )
}

export default Footer