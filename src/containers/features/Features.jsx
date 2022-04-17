import React from 'react';
import Feature from '../../components/feature/Feature';
import './features.css';

const featuresData = [
  {
    title: 'Connect & Display',
    text: 'Connect with Phantom or Metamask(coming soon) wallet to drag and drop NFTs onto your walls',
  },
  {
    title: 'Advertise & Market',
    text: 'Upgrade your room to a product showroom. Rent a billboard to advertsie for your business',
  },
  {
    title: 'Stake & Play-to-Earn',
    text: 'Participate in our games or stake your MansonRive $MARV tokens to earn passive income.',
  },
  {
    title: 'Importable Characters',
    text: 'Other NFT project owners may upload their 3D assets for others to use as their MansonRive Character.',
  },
];

const Features = () => (
  <div className="manson__features section__padding" id="features">
    <div className="manson__features-heading">
      <h1 className="gradient__text">Step into the Future, Today.</h1>
      <p>Our Features</p>
    </div>
    <div className="manson__features-container">
      {featuresData.map((item, index) => (
        <Feature title={item.title} text={item.text} key={item.title + index} />
      ))}
    </div>
  </div>
);

export default Features;
