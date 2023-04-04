import React from 'react'
import ActionButton from '../components/ActionButton/ActionButton'
import './Production.css'

const Production = () => {
    return (
        <main>
            <section>
                <div className="production-main d-f align-center">
                   <div className="production-main-info">
                       <h3 className="production-main-title">Need to create a unique product for your company?</h3>
                       <h4 className="production-main-subtitle">
                            Why? Because it is tangible and it excites. It engages, raises awareness and evokes emotions.
                        </h4>
                        <ActionButton title='Write to the manager' bgColor='#3C336C' txtColor='#FFFFFF'/>
                   </div>
                   <div className="production-main-img"><img src="images/production-main.png" alt="production-main" /></div>
                </div>
            </section>
            <section>
                <div className="sewing-possibilities">
                    <h3 className="sewing-possibilities-title">We can create</h3>
                    <h4 className="sewing-possibilities-subtitle">Products most often ordered by our customers</h4>
                    <div className="sewing-possibilities-box d-f jc-sb">
                        <div className="sewing-possibilities-item">
                            <div className="possibilities-item-img"><img src="images/mugs.png" alt="mugs" /></div>
                            <div className="possibilities-item-title">Hats</div>
                        </div>
                        <div className="sewing-possibilities-item">
                            <div className="possibilities-item-img"><img src="images/mugs.png" alt="mugs" /></div>
                            <div className="possibilities-item-title">Hoodie</div>
                        </div>
                        <div className="sewing-possibilities-item">
                            <div className="possibilities-item-img"><img src="images/mugs.png" alt="mugs" /></div>
                            <div className="possibilities-item-title">Sweatshirts</div>
                        </div>
                        <div className="sewing-possibilities-item">
                            <div className="possibilities-item-img"><img src="images/mugs.png" alt="mugs" /></div>
                            <div className="possibilities-item-title">T-shirts</div>
                        </div>
                        <div className="sewing-possibilities-item">
                            <div className="possibilities-item-img"><img src="images/mugs.png" alt="mugs" /></div>
                            <div className="possibilities-item-title">T-shirts</div>
                        </div>
                        <div className="sewing-possibilities-item">
                            <div className="possibilities-item-img"><img src="images/mugs.png" alt="mugs" /></div>
                            <div className="possibilities-item-title">T-shirts</div>
                        </div>
                        <div className="sewing-possibilities-item">
                            <div className="possibilities-item-img"><img src="images/mugs.png" alt="mugs" /></div>
                            <div className="possibilities-item-title">T-shirts</div>
                        </div>
                        <div className="sewing-possibilities-item">
                            <div className="possibilities-item-img"><img src="images/mugs.png" alt="mugs" /></div>
                            <div className="possibilities-item-title">T-shirts</div>
                        </div>
                    </div>
                    <div className="sewing-possibilities-options d-f jc-sb">
                        <div className="possibilities-options-item">
                            <h4 className="options-item-title">Production time</h4>
                            <p className="options-item-desc">
                                Tailoring terms will depend on the volume of your order and the complexity of the models.
                                On average, the production of corporate products takes <span>10 - 18 business days </span>
                                from the date of approval of all details.
                            </p>
                            <p className="options-item-desc" style={{ marginTop: "15px", color: "#3C336C" }}>
                                If you need "for yesterday" - you can agree on such conditions with your personal manager.
                            </p>
                        </div>
                        <div className="possibilities-options-item">
                            <h4 className="options-item-title">Price</h4>
                            <p className="options-item-desc">
                                The cost of producing branded products to order is calculated
                                individually. The price depends on the complexity of the work, branding, materials, circulation
                                and urgency. We will find the best option for you according to your budget
                            </p>
                        </div>
                        <div className="possibilities-options-item">
                            <h4 className="options-item-title">Branding</h4>
                            <p className="options-item-desc">
                                The cost of producing branded products to order is calculated
                                individually. The price depends on the complexity of the work, branding, materials, circulation
                                and urgency. We will find the best option for you according to your budget
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default Production