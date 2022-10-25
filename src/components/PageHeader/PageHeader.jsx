import React from 'react';
import { LogoGrey} from '../Logo/Logo.jsx';
import {Menu} from '../Menu/Menu.jsx'
import './PageHeader.scss';

export function PageHeader() {
    return (
        <header className="PageHeader">
            <LogoGrey />
            <Menu />
        </header>
    );
}