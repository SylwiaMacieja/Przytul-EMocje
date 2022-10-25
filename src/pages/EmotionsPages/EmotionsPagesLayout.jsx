import React from "react";
import './EmotionsPagesLayout.scss'


export function EmotionsPagesComponent (props) {

    return (
        <div className="Emotion">
            <h1 className='Emotion__title'>{props.emotionTitle}</h1>
            <p className='Emotion__descriptionMain'>{props.emotionDescMain}</p>
            <h2 className='Emotion__title2'>{props.emotionSubtitle}</h2>
            <p className='Emotion__description'>{props.emotionDesc}</p>
            <h2 className='Emotion__title2'>{props.emotionTask}</h2>
            <p className='Emotion__description'>{props.emotionTask1}</p>
            <p className='Emotion__description'>{props.emotionTaks2}</p>
            <p className='Emotion__description'>{props.emotionTask3}</p>
            <p className='Emotion__source'>{props.emotionSource}</p>
        </div>
    )
}