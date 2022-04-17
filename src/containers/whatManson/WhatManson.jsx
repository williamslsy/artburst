import React from 'react';
import Feature from '../../components/feature/Feature';
// import ai from '../../assets/ai.png';
// import marv1 from '../../assets/marv1.mp4';
// import marv2 from '../../assets/marv2.mp4';
import './whatManson.css';

const WhatManson = () => (
  <div
    data-aos="fade-right"
    data-aos-delay="300"
    className="whatManson section__margin"
    id="wManson"
  >
    <div className="whatManson-feature">
      <Feature
        title="What is MansonRive"
        text="MansonRive team is building a unique virtual world (MarvCity), to create immersive game experiences with The Manson Maker."
      />
    </div>
    <div className="whatManson-heading">
      {/* <img width="100%" border="none" margin="section__margin" src={ai} /> */}
      <h1 className="gradient__text">
        The possibilities are beyond your imagination
      </h1>
      <p>View our Whitepaper</p>
    </div>
    <div className="whatManson-container">
      {/* <Feature title="MARV KEYS DELUXE" /><video width="100%" height="50%" hidden="true" allowFullScreen="true" controls={false} autoPlay="true" playing loop muted poster={marv1}> <source src={marv1} type="video/mp4" /></video>
      <Feature title="MARV KEYS PREMIUM" /><video width="100%" height="50%" hidden="true" allowFullScreen="true" controls={false} autoPlay playing loop muted poster={marv2}> <source src={marv2} type="video/mp4" /></video> */}
      {/* <Feature title="MARV MARKET" img={marv3} /> */}
    </div>
  </div>
);

export default WhatManson;
