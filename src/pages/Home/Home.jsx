import React from 'react';
import "./Home.scss"
import {NavLink} from "react-router-dom";


export function Home() {
    return (
        <div className="Home">

            <div className='Home__img1'>
                <NavLink className="Home__button1" to="/layout/form">Formularz</NavLink>
            </div>

            <div className='Home__img2'>
                <NavLink className="Home__button2" to="/layout/notes">Notatnik</NavLink>
            </div>

            <div className='Home__img3'>
                <NavLink className="Home__button3" to="/oemocjach">O emocjach</NavLink>
            </div>

            <div className='Home__img4'>
                <NavLink className="Home__button4" to="/layout/losujemocje">Przytul emocję</NavLink>
            </div>
        </div>
    );
}
