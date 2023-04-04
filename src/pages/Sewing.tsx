import React from 'react'
import ActionButton from '../components/ActionButton/ActionButton'
import './Sewing.css'

const Sewing = () => {
    return (
        <main>
            <section>
                <div className="sewing-main d-f align-center">
                    <div className="sewing-main-info">
                        <h3 className="sewing-main-title">Modern merch creates modern brands</h3>
                        <p className="sewing-main-desc">
                            Why? Because it is tangible and it excites. It engages, raises awareness and evokes emotions.
                            Our team always dives into the order concept in order to offer you the best solution while optimizing costs.
                            We have a wide range of ready-made models, we will also produce any product according to your design.
                        </p>
                        <div className="sewing-main-actions d-f align-center">
                            <ActionButton title='Submit' bgColor='#3C336C' txtColor=' #FFFFFF' />
                            <div className="sewing-main-note">Minimum Quantity: 25</div>
                        </div>
                    </div>
                    <div className="sewing-main-img"><img src="images/sewing-main.png" alt="sewing-main" /></div>
                </div>
            </section>
            <section>
                <div className="sewing-possibilities">
                    <h3 className="sewing-possibilities-title">We can sew</h3>
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
                            <p className="options-item-desc" style={{marginTop: "15px", color: "#3C336C"}}>
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

export default Sewing