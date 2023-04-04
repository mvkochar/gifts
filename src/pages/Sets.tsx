import React from 'react'
import './Sets.css'
import ActionButton from '../components/ActionButton/ActionButton'
import ProductCart from '../components/ProductCart/ProductCart'

const Sets = () => {
    const [showSetsMore, setShowSetsMore] = React.useState(false)

    const handleSetsMore = () => {
        setShowSetsMore((prevState) => {
            return (
                !prevState
            )
        })
    }

    return (
        <main>
            <section>
                <div className="sets-main d-f jc-sb align-center">
                    <div className="sets-main-info">
                        <h3 className="sets-main-title">Gift sets are unusual......</h3>
                        <h4 className="sets-main-subtitle">
                            Why? Because it is tangible and it excites. It engages, raises awareness and evokes emotions.
                        </h4>
                        <div className="sets-main-actions d-f align-center">
                            <ActionButton title='Choose a box' bgColor=' #3C336C' txtColor='#FFFFFF' />
                            <ActionButton title='Create your' bgColor='transparent' txtColor='#524983' />
                        </div>
                    </div>
                    <div className="sets-main-img"><img src="images/sets-main.png" alt="sets-main" /></div>
                </div>
            </section>
            <section>
                <div className="sets-catalog">
                    <h3 className="sets-catalog-title">Ready sets</h3>
                    <div className="sets-catalog-box d-f jc-sb">
                        <ProductCart
                            image='images/sets1.png'
                            title='EL003 Elleven Checkpoint-Friendly Compu-Backpack'
                            subtitle='EL003 Elleven Checkpoint-Friendly Compu-Backpack'
                            rating={2}
                            price={76.43}
                            ifMask={false}
                        />
                        <ProductCart
                            image='images/sets2.png'
                            title='EL003 Elleven Checkpoint-Friendly Compu-Backpack'
                            subtitle='EL003 Elleven Checkpoint-Friendly Compu-Backpack'
                            rating={2}
                            price={76.43}
                            ifMask={false}
                        />
                        <ProductCart
                            image='images/sets3.png'
                            title='EL003 Elleven Checkpoint-Friendly Compu-Backpack'
                            subtitle='EL003 Elleven Checkpoint-Friendly Compu-Backpack'
                            rating={2}
                            price={76.43}
                            ifMask={false}
                        />
                        <ProductCart
                            image='images/sets4.png'
                            title='EL003 Elleven Checkpoint-Friendly Compu-Backpack'
                            subtitle='EL003 Elleven Checkpoint-Friendly Compu-Backpack'
                            rating={2}
                            price={76.43}
                            ifMask={false}
                        />
                    </div>
                    <div className={showSetsMore ? "sets-catalog-box d-f jc-sb" : "d-n"} style={{ marginTop: "20px" }} >
                        <ProductCart
                            image='images/sets1.png'
                            title='EL003 Elleven Checkpoint-Friendly Compu-Backpack'
                            subtitle='EL003 Elleven Checkpoint-Friendly Compu-Backpack'
                            rating={2}
                            price={76.43}
                            ifMask={false}
                        />
                        <ProductCart
                            image='images/sets2.png'
                            title='EL003 Elleven Checkpoint-Friendly Compu-Backpack'
                            subtitle='EL003 Elleven Checkpoint-Friendly Compu-Backpack'
                            rating={2}
                            price={76.43}
                            ifMask={false}
                        />
                        <ProductCart
                            image='images/sets3.png'
                            title='EL003 Elleven Checkpoint-Friendly Compu-Backpack'
                            subtitle='EL003 Elleven Checkpoint-Friendly Compu-Backpack'
                            rating={2}
                            price={76.43}
                            ifMask={false}
                        />
                        <ProductCart
                            image='images/sets4.png'
                            title='EL003 Elleven Checkpoint-Friendly Compu-Backpack'
                            subtitle='EL003 Elleven Checkpoint-Friendly Compu-Backpack'
                            rating={2}
                            price={76.43}
                            ifMask={false}
                        />
                    </div>
                    <div className="sets-catalog-action d-f align-center">
                        <div className="sets-catalog-more"> {showSetsMore ? "Show less" : "Show more"} </div>
                        <button className="sets-catalog-btn" onClick={() => handleSetsMore()}>
                            <img src="images/arrow4.png" alt="arrow" />
                        </button>
                    </div>
           

                <div className="sewing-possibilities-options d-f jc-sb" style={{ backgroundColor: "#E5E5E5", marginTop: "84px" }}>
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
            <section>
                <div className="sets-contacts d-f jc-sb align-center">
                    <div className="sets-contacts-info">
                        <div className="sets-contacts-logo"><img src="images/pangolin.png" alt="creative" /></div>
                        <h3 className="sets-contacts-title">How to create a box according to your idea?</h3>
                        <h4 className="sets-contacts-subtitle">
                            Do you have your own unique boxing idea or do you want to style everything to the same look?
                        </h4>
                         <div className="sets-contacts-message d-f">
                            <div className="sets-contacts-caption">
                                Enter your contact details and our manager will contact you <span>within 15 minutes</span>
                            </div>
                            <form className="sets-contacts-fm">
                                <div><input type="text" name='userName' placeholder='Your Name' required /></div>
                                <div><input type="email" name="email" placeholder='Your email' required /></div>
                                <div><input type="tel" name="phone" placeholder='Your phone number' required /></div>
                                <ActionButton title='Order' bgColor=' #1FAB8A' txtColor='#FFFFFF'/>
                            </form>
                         </div>
                    </div>
                    <div className="sets-contacts-img"><img src="images/sets-contact.png" alt="sets-contact" /></div>
                </div>
            </section>
        </main>
    )
}

export default Sets