
import React from 'react';
import '../../components/EmotionCards/EmotionCards.scss';
import {Curiosity, Happiness, Madness, Sadness} from "../../components/EmotionCards/EmotionCards";

export function AboutEmotions() {
    return (
        <div className='wrapper'>
            <Curiosity />
           <Happiness />
            <Sadness />
            <Madness />
        </div>
    );
}