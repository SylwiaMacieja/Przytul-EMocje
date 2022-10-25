import React from 'react';
import { Link } from 'react-router-dom';
import './Logo.scss';
import logoGreenImg from './LogoGreen.png';
import logoGreyImg from './LogoGrey.png';

export function LogoGreen() {
    return <Link  to="/"><img className="LogoGreen" src={logoGreenImg} alt='logo'/></Link>;
}

export function LogoGrey() {
    return <Link to="/"><img className="LogoGrey" src={logoGreyImg} alt='logo'/></Link>;
}
