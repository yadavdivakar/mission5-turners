import React from 'react';
import { Link, Route } from 'react-router-dom';
import img from '../images/Home/Hero image option 1 edit 2.png'
import '../styles/Home.css';



function Home() {

  return (<>

    <div className='HeroBackground'>
      <div className='LeftContainer'>
        <div className='HeroHeader'>
          <h1 style={{ fontFamily: `Nunito` }}> Prepare young minds <br />
            for a better <span className='Future'>future.</span>
          </h1>
        </div>
        <div className='HeroBody'>
          <p style={{ fontFamily: `Open sans` }}> Let us help you advance students in Digital <br />
            Technologies and other learning areas with <br />
            our project-based learning programme.
          </p>
        </div>
        <div className='ButtonContainer'>
            <button className='LearnMoreButton'>Learn more</button>
          
            <button className='SignUpButton'>Sign Up</button>
        </div>
      </div>
      <div className='Right'>
      </div>
    </div>
    <div className='CarouselContainer'>
      Hello
    </div>
    </>
  );
}
export default Home;