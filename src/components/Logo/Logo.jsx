import React from 'react';
import { Link } from 'react-router-dom';
import './Logo.scss';
import LogoGreen from './LogoGreen.png'

export function Logo() {
    return <Link className="Logo" to="/"><img src=''/></Link>;
}
