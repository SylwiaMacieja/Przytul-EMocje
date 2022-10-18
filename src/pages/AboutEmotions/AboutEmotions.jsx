
import React from 'react';
import {HappinessButton} from "../../components/EmotionButtons/Happiness/HappinessButton.jsx";
import {SadnessButton} from "../../components/EmotionButtons/Sadness/SadnessButton";
import {CuriosityButton} from "../../components/EmotionButtons/Curiosity/CuriosityButton";
import {MadnessButton} from "../../components/EmotionButtons/Madness/MadnessButton";
import '../../components/EmotionButtons/EmotionButtons.scss'

export function AboutEmotions() {
    return (
        <div className="EmotionsContainer">
            <CuriosityButton />
            <HappinessButton />
            <SadnessButton />
            <MadnessButton />
        </div>
    );
}