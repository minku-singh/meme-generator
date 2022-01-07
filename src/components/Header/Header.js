import React from 'react';
import troll from './../../images/troll-face.png';
import './Header.css';

export default function Header() {
    return (
        <div className='header'>
            <img className='header--img' src={troll} alt="troll-face" />
            <h1> Meme Generator </h1>
        </div>
    )
}
