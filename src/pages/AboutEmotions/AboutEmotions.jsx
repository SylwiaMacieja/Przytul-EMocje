
import React from 'react';
import '../../components/EmotionCards/EmotionCards.scss';
import {
    Curiosity,
    Happiness,
    Madness,
    Sadness, Love, Loneliness, Trust
} from "../../components/EmotionCards/EmotionCards";

export function AboutEmotions() {
    return (
        <div className='wrapper'>
            <Curiosity />
            <Love />
            <Happiness />
            <Sadness />
            <Loneliness />
            <Madness />
            <Trust />
        </div>
    );
}