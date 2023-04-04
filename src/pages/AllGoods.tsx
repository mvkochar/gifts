import React from 'react'
import ProductCart from '../components/ProductCart/ProductCart'
import './AllGoods.css'
import ActionButton from '../components/ActionButton/ActionButton'

const AllGoods = () => {
    const [showMore, setShowMore] = React.useState(false)
    const [showMoreItems, setShowMoreItems] = React.useState(false)

    const handleShowMore = () => {
        setShowMore((prevState) => {
            return (
                !prevState
            )
        })
    }

    const handleShowMoreItems = () => {
        setShowMoreItems((prevState) => {
            return (
                !prevState
            )
        })
    }
    return (
        <main>
            <section>
                <div className="goods-main d-f align-center">
                    <div className="goods-main-info">
                        <h3 className="goods-main-title">buy a cup with a logo</h3>
                        <p className="goods-main-desc">
                            Logo cups are a classic. Any conference or business meeting will not do without this requisite.
                            It is also a great gift for your employees, business partners, friends or regular customers.
                            Catering establishment owners can order large quantities of cups for their restaurant or cafe.
                            You can also distribute these products during promotional events, presentations, exhibitions or conferences.
                        </p>
                        <p className={showMore ? "goods-main-desc" : "d-n"}  >
                            Logo cups are a classic. Any conference or business meeting will not do without this requisite.
                            It is also a great gift for your employees, business partners, friends or regular customers.
                            Catering establishment owners can order large quantities of cups for their restaurant or cafe.
                            You can also distribute these products during promotional events, presentations, exhibitions or conferences.
                        </p>
                        <div className="goods-main-actions d-f align-center">
                            <div className="goods-main-show"> {showMore ? "Show less" : "Show more"}</div>
                            <button className='goods-main-btn' onClick={() => handleShowMore()}>
                                <img src="images/arrow3.png" alt="arrow3" />
                            </button>
                        </div>
                    </div>
                    <div className="goods-main-img"><img src="images/goods-main.png" alt="goods-main" /></div>
                </div>
            </section>
            <section>
                <div className="goods-catalog">
                    <ul className="goods-catalog-menu d-f">
                        <li className="catalog-menu-item menu-item__active">All goods</li>
                        <li className="catalog-menu-item">Hoodies</li>
                        <li className="catalog-menu-item">Sweatshirts</li>
                        <li className="catalog-menu-item">T-shirts</li>
                        <li className="catalog-menu-item">Polo</li>
                        <li className="catalog-menu-item">Vests</li>
                        <li className="catalog-menu-item">Backpacks</li>
                        <li className="catalog-menu-item">Bananas</li>
                        <li className="catalog-menu-item">Eco bags/shoppers</li>
                        <li className="catalog-menu-item">Plaids</li>
                        <li className="catalog-menu-item">Socks</li>
                        <li className="catalog-menu-item">Masks</li>
                    </ul>
                    <div className="goods-catalog-box d-f jc-sb">
                        <ProductCart
                            image='images/all-goods1.png'
                            title='EL003 Elleven Checkpoint-Friendly Compu-Backpack'
                            subtitle='EL003 Elleven Checkpoint-Friendly Compu-Backpack'
                            rating={2}
                            price={76.43}
                        />
                        <ProductCart
                            image='images/all-goods2.png'
                            title='EL003 Elleven Checkpoint-Friendly Compu-Backpack'
                            subtitle='EL003 Elleven Checkpoint-Friendly Compu-Backpack'
                            rating={2}
                            price={76.43}
                        />
                        <ProductCart
                            image='images/all-goods3.png'
                            title='EL003 Elleven Checkpoint-Friendly Compu-Backpack'
                            subtitle='EL003 Elleven Checkpoint-Friendly Compu-Backpack'
                            rating={2}
                            price={76.43}
                        />
                        <ProductCart
                            image='images/all-goods4.png'
                            title='EL003 Elleven Checkpoint-Friendly Compu-Backpack'
                            subtitle='EL003 Elleven Checkpoint-Friendly Compu-Backpack'
                            rating={2}
                            price={76.43}
                        />
                        <ProductCart
                            image='images/all-goods5.png'
                            title='EL003 Elleven Checkpoint-Friendly Compu-Backpack'
                            subtitle='EL003 Elleven Checkpoint-Friendly Compu-Backpack'
                            rating={2}
                            price={76.43}
                        />
                        <ProductCart
                            image='images/all-goods6.png'
                            title='EL003 Elleven Checkpoint-Friendly Compu-Backpack'
                            subtitle='EL003 Elleven Checkpoint-Friendly Compu-Backpack'
                            rating={2}
                            price={76.43}
                        />
                        <ProductCart
                            image='images/all-goods7.png'
                            title='EL003 Elleven Checkpoint-Friendly Compu-Backpack'
                            subtitle='EL003 Elleven Checkpoint-Friendly Compu-Backpack'
                            rating={2}
                            price={76.43}
                        />
                        <ProductCart
                            image='images/all-goods8.png'
                            title='EL003 Elleven Checkpoint-Friendly Compu-Backpack'
                            subtitle='EL003 Elleven Checkpoint-Friendly Compu-Backpack'
                            rating={2}
                            price={76.43}
                        />
                    </div>
                    <div className={showMoreItems ? "goods-catalog-box d-f jc-sb" : "d-n"}>
                        <ProductCart
                            image='images/all-goods1.png'
                            title='EL003 Elleven Checkpoint-Friendly Compu-Backpack'
                            subtitle='EL003 Elleven Checkpoint-Friendly Compu-Backpack'
                            rating={2}
                            price={76.43}
                        />
                        <ProductCart
                            image='images/all-goods2.png'
                            title='EL003 Elleven Checkpoint-Friendly Compu-Backpack'
                            subtitle='EL003 Elleven Checkpoint-Friendly Compu-Backpack'
                            rating={2}
                            price={76.43}
                        />
                        <ProductCart
                            image='images/all-goods3.png'
                            title='EL003 Elleven Checkpoint-Friendly Compu-Backpack'
                            subtitle='EL003 Elleven Checkpoint-Friendly Compu-Backpack'
                            rating={2}
                            price={76.43}
                        />
                        <ProductCart
                            image='images/all-goods4.png'
                            title='EL003 Elleven Checkpoint-Friendly Compu-Backpack'
                            subtitle='EL003 Elleven Checkpoint-Friendly Compu-Backpack'
                            rating={2}
                            price={76.43}
                        />
                        <ProductCart
                            image='images/all-goods5.png'
                            title='EL003 Elleven Checkpoint-Friendly Compu-Backpack'
                            subtitle='EL003 Elleven Checkpoint-Friendly Compu-Backpack'
                            rating={2}
                            price={76.43}
                        />
                        <ProductCart
                            image='images/all-goods6.png'
                            title='EL003 Elleven Checkpoint-Friendly Compu-Backpack'
                            subtitle='EL003 Elleven Checkpoint-Friendly Compu-Backpack'
                            rating={2}
                            price={76.43}
                        />
                        <ProductCart
                            image='images/all-goods7.png'
                            title='EL003 Elleven Checkpoint-Friendly Compu-Backpack'
                            subtitle='EL003 Elleven Checkpoint-Friendly Compu-Backpack'
                            rating={2}
                            price={76.43}
                        />
                        <ProductCart
                            image='images/all-goods8.png'
                            title='EL003 Elleven Checkpoint-Friendly Compu-Backpack'
                            subtitle='EL003 Elleven Checkpoint-Friendly Compu-Backpack'
                            rating={2}
                            price={76.43}
                        />
                    </div>
                    <div className="goods-catalog-actions d-f align-center">
                        <div className="goods-catalog-show">{showMoreItems ? "Show less" : "Show more"}</div>
                        <button className='goods-catalog-btn' onClick={() => handleShowMoreItems()}>
                            <img src="images/arrow4.png" alt="arrow" />
                        </button>
                    </div>
                </div>
            </section>
            <section>
                <div className="gifts-contacts">
                    <div className="gifts-contacts-info d-f jc-sb align-center">
                        <div className="gifts-contacts-caption">
                            <h3 className="gifts-creative-title">Do you have your own unique idea for developing merchandise?</h3>
                            <h4 className="gifts-creative-subtitle">
                                We will make merch according to your design. We will tell you life hacks and introduce you
                                to the production technology, we will provide samples of materials.
                            </h4>
                        </div>
                        <div className="gifts-contacts-images d-f align-center">
                            <div>
                                <div><img src="images/rocket1.png" alt="rocket1" /></div>
                                <div><img src="images/curve.png" alt="curve" /></div>
                            </div>
                            <div><img src="images/lamp.png" alt="ideas" /></div>
                            <div><img src="images/rocket2.png" alt="rocket2" /></div>
                        </div>
                    </div>
                    <h4 className="gifts-contacts-title">Enter your contact details and our manager will contact you within 1 hour</h4>
                    <form className="gifts-contacts-fm d-f">
                        <div><input type="text" name="userName" placeholder='Your Name' /></div>
                        <div><input type="email" name="email" placeholder='Your email' /></div>
                        <div><input type="tel" name="phone" placeholder='Your phone number' /></div>
                        <ActionButton title='Order' bgColor='#1FAB8A' txtColor='#FFFFFF' />
                    </form>
                </div>
            </section>
        </main>
    )
}

export default AllGoods