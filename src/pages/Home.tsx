import React from 'react'
import ActionButton from '../components/ActionButton/ActionButton'
import './Home.css'

const Home = () => {
  return (
    <main>
      <section>
        <div className="gifts-main d-f align-center">
          <div className="gifts-main-info">
            <h3 className="gifts-main-title">Fresh breath in corporate life</h3>
            <p className="gifts-main-desc">
              We have perfected the process of product promotion so that you and your company concentrate on the main
              tasks and reach the set goals.
            </p>
            <div className="gifts-main-options d-f">
              <div className="main-options-item">High quality<br />ONLY</div>
              <div className="main-options-item">Manager support<br />24/7</div>
              <div className="main-options-item">Fulfillment of an<br />order in turbo mode</div>
            </div>
          </div>
          <div className="gifts-main-img"><img src="images/gifts-main.png" alt="gifts-main" /></div>
        </div>
      </section>
      <section>

        <div className="gifts-top">
          <div className="gifts-top-info d-f jc-sb">
            <div className="gifts-top-caption">
              <h3 className="gifts-top-title">Most popular</h3>
              <h4 className="gifts-top-subtitle">Products most often ordered by our customers</h4>
            </div>
            <div className="gifts-top-link d-f">
              <div>All products</div>
              <a href=""><img src="images/arrow1.png" alt="arrow" /></a>
            </div>
          </div>
          <div className="gifts-top-box d-f">
            <div className="gifts-top-item"><img src="images/gifts-top1.png" alt="gifts-top1" /></div>
            <div className="gifts-top-item">
                <div><img src="images/gifts-top2.png" alt="gifts-top2"/></div>
                <div className='d-f' style={{gap: "9px", marginTop: "10px"}}>
                  <div><img src="images/gifts-top3.png" alt="gifts-top3" /></div>
                  <div><img src="images/gifts-top4.png" alt="gifts-top4" /></div>
                </div>
            </div>
          </div>
          <div className="gifts-top-undertitle">Shoppers</div>
        </div>
      </section>
      <section>
        <div className="gifts-creative d-f jc-sb align-center">
          <div className="gifts-creative-caption">
              <div className="gifts-creative-logo"><img src="images/pangolin.png" alt="pangolin" /></div>
              <h3 className="gifts-creative-title">Do you want to surprise your colleagues/partners with unusual gifts?</h3>
              <h4 className="gifts-creative-subtitle">
                Choose ready-made gift sets or indicate the criteria by which we will assemble a unique box for you.
              </h4>
              <div className="gifts-creative-actions d-f">
                <ActionButton title='Go to sets' bgColor='#272525' txtColor='#FAFAFA'/>
                <ActionButton title='Create your' bgColor='#EEF1F6' txtColor='#272525'/>
              </div>
          </div>
          <div className="gifts-creative-img"><img src="images/creative.png" alt="creative" /></div>
        </div>
        <div className="gifts-creative d-f jc-sb align-center">
          <div className="gifts-creative-img"><img src="images/sweater1.png" alt="sweater" /></div>
          <div className="gifts-creative-caption">
              <h3 className="gifts-creative-title">
                In addition to high quality finished products, we can produce for you clothes, accessories, goodies and more on order.
              </h3>
              <h4 className="gifts-creative-subtitle">
                Thanks to personal production, we produce large batches in a short time, and you always have 
                the opportunity to customize products.
              </h4>
              <div className="gifts-creative-examples d-f">
                <div><img src="images/example1.png" alt="example1" /></div>
                <div><img src="images/example2.png" alt="example2"  /></div>
                <div><img src="images/example3.png" alt="example3"  /></div>
                <div><img src="images/example4.png" alt="example4" /></div>
              </div>
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
            <div><input type="email" name="email" placeholder='Your email'/></div>
            <div><input type="tel" name="phone" placeholder='Your phone number' /></div>
            <ActionButton title='Order' bgColor='#1FAB8A' txtColor='#FFFFFF'/>
          </form>
        </div>
      </section>
      <section>
         <div className="gifts-partners">
             <h3 className="gifts-partners-title">They cooperate with us</h3>
             <div className="gifts-partners-box d-f jc-sb align-center">
                <div><img src="images/partner1.png" alt="partner1" /></div> 
                <div><img src="images/partner2.png" alt="partner2" /></div>
                <div><img src="images/partner3.png" alt="partner3" /></div>
                <div><img src="images/partner4.png" alt="partner4" /></div>
                <div><img src="images/partner5.png" alt="partner5" /></div>    
             </div>
          </div> 
      </section>
    </main>
  )
}

export default Home