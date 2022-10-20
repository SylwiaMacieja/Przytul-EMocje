import React from "react";
import {NavLink} from "react-router-dom";

export function Happiness () {
    return (
        <div>
            <EmotionCards
                img=""
                title="Radość"
                description='Stan emocjonalny, który wyraża w świadomości uczucie całkowitego spełnienia. Jest synonimem szczęścia w rozumieniu potocznym towarzyszącym zabawie, zadowoleniu lub satysfakcji z przeżywanych doznań, wykonywanych czynności lub przywoływanych w pamięci wspomnień. '
            />
        </div>
    )
}

export function Madness () {
    return (
        <div>
            <EmotionCards
                img=""
                title="Wściekłość"
                description='Stan emocjonalny, który wyraża w świadomości uczucie całkowitego spełnienia. Jest synonimem szczęścia w rozumieniu potocznym towarzyszącym zabawie, zadowoleniu lub satysfakcji z przeżywanych doznań, wykonywanych czynności lub przywoływanych w pamięci wspomnień. '
            />
        </div>
    )
}
export function Sadness () {
    return (
        <div>
            <EmotionCards
                img=""
                title="Smutek"
                description='Stan emocjonalny, który wyraża w świadomości uczucie całkowitego spełnienia. Jest synonimem szczęścia w rozumieniu potocznym towarzyszącym zabawie, zadowoleniu lub satysfakcji z przeżywanych doznań, wykonywanych czynności lub przywoływanych w pamięci wspomnień. '
            />
        </div>
    )
}

export function Curiosity () {
    return (
        <div>
            <EmotionCards
                img=""
                title="Ciekawość"
                description='Stan emocjonalny, który wyraża w świadomości uczucie całkowitego spełnienia. Jest synonimem szczęścia w rozumieniu potocznym towarzyszącym zabawie, zadowoleniu lub satysfakcji z przeżywanych doznań, wykonywanych czynności lub przywoływanych w pamięci wspomnień. '
            />
        </div>
    )
}

export function EmotionCards (props  ) {
    return (
     <div className="Card">
        <div className="Card__body">
            <img src={props.img} className="Card__image"/>
            <h2 className="Card__title">{props.title}</h2>
            <p className='Card__description'>{props.description}</p>
        </div>
         <NavLink className='Card__btn' to='/happiness'>Przyjrzyj się emocji </NavLink>
     </div>
    )
}

