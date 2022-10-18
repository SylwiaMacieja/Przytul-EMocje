import React from 'react';
import { Logo } from '../Logo/Logo.jsx';
import {Menu} from '../Menu/Menu.jsx'
import './PageHeader.scss';

export function PageHeader() {
    return (
        <header className="PageHeader">
            <Logo />
            <Menu />
        </header>
    );
}