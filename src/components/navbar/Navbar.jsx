import { alignProperty } from '@mui/material/styles/cssUtils';
import React, { useState } from 'react';
import { RiMenu3Line, RiCloseLine, RiWalletLine } from 'react-icons/ri';
import logo from '../../logo.svg';
import './navbar.css';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="gpt3__navbar">
      <div className="gpt3__navbar-links">
        <div className="gpt3__navbar-links_logo">
          <img src={logo} />
        </div>
        <div className="gpt3__navbar-links_container">
          <p><a href="#home">HOME</a></p>
          <p><a href="#nft">NFT</a></p>
          <p><a href="#about">ABOUT</a></p>
          <p><a href="#staking">STAKING</a></p>
          <p><a href="#whitepaper">WHITEPAPER</a></p>
        </div>
      </div>
      <div className="gpt3__navbar-sign">
        <button type="button" className='btn'><RiWalletLine color="#b747e5" size={27}/> <p style={{display:"inline-block"}}>Connect Wallet</p></button>
      </div>
      <div className="gpt3__navbar-menu">
        {toggleMenu
          ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
          : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />}
        {toggleMenu && (
        <div className="gpt3__navbar-menu_container scale-up-center">
          <div className="gpt3__navbar-menu_container-links">
            <p><a href="#home">Home</a></p>
            <p><a href="#nft">NFT</a></p>
            <p><a href="#about">ABOUT</a></p>
            <p><a href="#staking">STAKING</a></p>
            <p><a href="#whitepaper">WHITEPAPER</a></p>
          </div>
          <div className="gpt3__navbar-sign">
            <button type="button">Demo Live</button>
          </div>
        </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
