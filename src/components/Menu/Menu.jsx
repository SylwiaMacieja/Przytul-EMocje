import React from 'react';
import { NavLink } from 'react-router-dom';
import './Menu.scss';

export function Menu() {
    return (
        <ul className="Menu">
            <li><NavLink className="Menu__item" to="/form">Formularz</NavLink></li>
            <li><NavLink className="Menu__item" to="/notes">Notatki</NavLink></li>
            <li><NavLink className="Menu__item" to="/oemocjach">O emocjach</NavLink></li>
            <li><NavLink className="Menu__item" to="/losujemocje">Przytul emocję</NavLink></li>
        </ul>
    );
}