import React from 'react';
// import people from '../../assets/people.png';
// import ai from '../../assets/ai.png';
// import possibilityImage from '../../assets/possibility.png';
// import meta from '../../assets/meta.mov';
import arbitrum from '../../assets/arbitrum.png';
import './header.css';

const Header = () => (
  <div className="manson__header section__margin" id="home">
    <div className="manson__header-image">
      {/* <video width="100%" height="100%" controls={false} autoPlay loop muted poster={meta}> <source src={meta} type="video/mp4" />
      </video> */}
      {/* <img data-aos="fade-right" data-aos-offset="3000" data-aos-easing="ease-in-sine" src={ai} /> */}
    </div>
    <div className="manson__header-content">
      <h1 className="gradient__text">Immersive Metaverse for <br /> NFT community, <br /> Gamers & more </h1>
      <p className="gradient__text">Overcoming limitations of centralized ownership and encouraging massive adoption <br /> of blockchain gaming market and economy..</p>
      <p style={{ color: 'white' }}>Powered by <img styles={{ padding: '0px 0  10px' }} width="16px" height="16px" src={arbitrum} /> Arbitrum</p>
    </div>
    <div className="manson__possibility-image">
      {/* <img src={possibilityImage} alt="possibility" /> */}
    </div>
  </div>
);

export default Header;

