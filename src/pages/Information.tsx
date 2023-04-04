import React from 'react'
import './Information.css'
import ActionButton from '../components/ActionButton/ActionButton'

const Information = () => {

    const [content, setContent] = React.useState(false)

    const handleShowContent = () => {
        setContent((prevState) => {
            return (
                !prevState
            )
        })
    }

    return (
        <main>
            <section>
                <div className="information-main d-f jc-sb align-center">
                    <div className="information-main-info">
                        <h3 className="information-main-title">Who are gifts & merch?</h3>
                        <p className="information-main-desc">Merch is a team of creative gurus with corporate expertise.</p>
                        <p className="information-main-desc">
                            We know how exciting, often stressful, is ordering branded products and corporate gifts, because
                            we were on both sides of the order. This allowed us to study the problems of businesses and present
                            the best and most modern solutions for our clients.
                        </p>
                        <div className="information-main-actions d-f">
                            <a href="#faq">FAQ</a>
                            <a href="#contacts">Contacts</a>
                            <a href="#connect">Contact us</a>
                        </div>
                    </div>
                    <div className="information-main-img"><img src="images/information-main.png" alt="information-main" /></div>
                </div>
            </section>
            <section>
                <div className="information-about">
                    <h3 className='information-about-title'>Fresh breath in corporate life</h3>
                    <p className="information-about-desc">
                        So, the Mechy site you see before you is the culmination of the “perfect storm” of many years
                        of searching, honing, creating and combining our skills and experience. And now - here it is!
                        We are very happy to share our range, our ideas and our passion with you.
                    </p>
                </div>
                <div className="information-about">
                    <h3 className='information-about-title'>Relieve a headache</h3>
                    <p className="information-about-desc">
                        Our goal is to save you the hassle. The choice and order of branded products should be pleasant,
                        and all the complexities and specifics of production will remain behind the scenes.
                        Be as productive as possible in your business and do not waste your energy on finding,
                        tasks and monitoring contractors.
                    </p>
                </div>
            </section>
            <section>
                <div className="information-faq" id='faq'>
                    <h2 className="information-faq-title">FAQ</h2>
                    <div className="information-faq-box d-f jc-sb align-center">
                        <div className="information-faq-about">
                            <div className="faq-about-item">
                                <div className="faq-about-caption d-f jc-sb align-center">
                                    <h3 className= {content ? "faq-about-title about-title__active" : "faq-about-title" }>Material</h3>
                                    <button className="faq-about-btn">
                                        <img 
                                            src= {content ? "images/arrow5.png" : "images/arrow4.png" } alt="arrow" 
                                            onClick={() => handleShowContent()}
                                        />
                                    </button>
                                </div>
                                <div className= {content ? "faq-about-content" : "d-n"}>
                                    <h4 className="about-content-title">
                                        You can order from us tailoring of sweatshirts from any kind of materials:
                                    </h4>
                                    <ul className="about-content-list">
                                        <li>Cotton 100%</li>
                                        <li>Cotton/polyester 85/15%</li>
                                        <li>Fleece</li>
                                    </ul>
                                </div>

                            </div>
                            <div className="faq-about-item">
                                <div className="faq-about-caption d-f jc-sb align-center">
                                    <h3 className="faq-about-title">How to order</h3>
                                    <button className="faq-about-btn"><img src="images/arrow4.png" alt="arrow" /></button>
                                </div>
                                <div className="faq-about-content d-n">
                                    <h4 className="about-content-title">
                                        You can order from us tailoring of sweatshirts from any kind of materials:
                                    </h4>
                                    <ul className="about-content-list">
                                        <li>Cotton 100%</li>
                                        <li>Cotton/polyester 85/15%</li>
                                        <li>Fleece</li>
                                    </ul>
                                </div>

                            </div>
                            <div className="faq-about-item">
                                <div className="faq-about-caption d-f jc-sb align-center">
                                    <h3 className="faq-about-title">Payment and delivery</h3>
                                    <button className="faq-about-btn"><img src="images/arrow4.png" alt="arrow" /></button>
                                </div>
                                <div className="faq-about-content d-n">
                                    <h4 className="about-content-title">
                                        You can order from us tailoring of sweatshirts from any kind of materials:
                                    </h4>
                                    <ul className="about-content-list">
                                        <li>Cotton 100%</li>
                                        <li>Cotton/polyester 85/15%</li>
                                        <li>Fleece</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="faq-about-item">
                                <div className="faq-about-caption d-f jc-sb align-center">
                                    <h3 className="faq-about-title">Fresh breath in corporate life</h3>
                                    <button className="faq-about-btn"><img src="images/arrow4.png" alt="arrow" /></button>
                                </div>
                                <div className="faq-about-content d-n">
                                    <h4 className="about-content-title">
                                        You can order from us tailoring of sweatshirts from any kind of materials:
                                    </h4>
                                    <ul className="about-content-list">
                                        <li>Cotton 100%</li>
                                        <li>Cotton/polyester 85/15%</li>
                                        <li>Fleece</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="information-faq-img"><img src="images/info.png" alt="info" /></div>
                    </div>
                </div>
            </section>
            <section>
                <div className="information-connections d-f jc-sb">
                    <div className="information-contacts" id='contacts'>
                        <h3 className="information-contacts-title">Contacts</h3>
                        <div className="information-contacts-email">example@gmail.com</div>
                        <div className="information-contacts-phone">+380 630 130 103</div>
                        <div className="information-contacts-social d-f">
                            <div><img src="images/viber.png" alt="viber" /></div>
                            <div><img src="images/telegram.png" alt="telegram" /></div>
                            <div><img src="images/whatsapp.png" alt="whatsapp" /></div>
                        </div> 
                    </div>
                    <div className="information-message" id='connect'>
                        <h3 className="information-message-title">Contact us</h3>
                        <div className="information-message-box d-f">
                            <p className="information-message-desc">
                                Enter your contact details and our manager will contact you <span>within 15 minutes</span>
                            </p>
                            <form className="information-message-fm">
                                 <div><input type="text" name='userName' placeholder='Your Name' required /></div>
                                 <div><input type="email" name="email" placeholder='Your email' required /></div>
                                 <div><input type="tel" name="phone" placeholder='Your phone number' required /></div>
                                 <ActionButton title='Order' bgColor='#1FAB8A' txtColor='#FFFFFF'/>
                            </form>
                        </div>
                    </div>
                </div>

            </section>
        </main>
    )
}

export default Information