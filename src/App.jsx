/* eslint-disable jsx-a11y/anchor-is-valid */
import image from './assets/illustration-hero.svg';
import logo from './assets/icon-music.svg';
import './App.css';

function App() {
  return (
    <main>
      <section>
        <div className="image">
          <img src={image} alt="" />
        </div>
        <div className="order-summary">
          <h1>Order Summary</h1>
          <p className='description'>You can now listen to millions of songs, audiobooks, and podcasts on any device anywhere you like!</p>
          <div className="annual-plan">
            <div className='detail'>
              <img src={logo} alt="" />
              <div>
                <h3>Annual Plan</h3>
                <p>$59.99/year</p>
              </div>
            </div>
            <div>
              <a href="#">Change</a>
            </div>
          </div>
          <div className="buttons">
            <button className='proceed'>Proceed to Payment</button>
            <button className='cancel'>Cancel Order</button>
          </div>
        </div>
      </section>
      <div class="attribution">
        Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank" rel="noreferrer">Frontend Mentor</a>. 
        Coded by <a href="https://www.frontendmentor.io/profile/Schade9" target="_blank" rel="noreferrer">Ssemakula Charles Derrick</a>.
      </div>
    </main>
  );
}

export default App;
