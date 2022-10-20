import React from 'react';
import { NavLink } from 'react-router-dom';
import './Menu.scss';

export function Menu() {
    return (
        <ul className="Menu">
            <li><NavLink className="Menu__item" to="/layout/form">Formularz</NavLink></li>
            <li><NavLink className="Menu__item" to="/layout/notes">Notatki</NavLink></li>
            <li><NavLink className="Menu__item" to="/layout/oemocjach">O emocjach</NavLink></li>
            <li><NavLink className="Menu__item" to="/layout/losujemocje">Przytul emocję</NavLink></li>
        </ul>
    );
}