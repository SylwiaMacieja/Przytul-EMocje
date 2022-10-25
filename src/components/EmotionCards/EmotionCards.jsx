import React from "react";
import {NavLink} from "react-router-dom";
import happiness4sq from './Img/happiness4sq.jpg';
import madness1sq from './Img/madness1sq.jpg'
import curiosity from './Img/curiosity1sq.jpg'
import sadness from './Img/sadness1sq.jpg'
import love from './Img/love1sq.jpg'
import trust from './Img/trust1sq.jpg'
import lonelisness from './Img/loneliness2sq.jpg'


export function EmotionCards (props) {
    return (
        <div className="Card">
            <div className="Card__body">
                <img src={props.img} className="Card__image"/>
                <h2 className="Card__title">{props.title}</h2>
                <p className='Card__description'>{props.description}</p>
            </div>
            <NavLink className='Card__btn' to={props.to}>Przyjrzyj się emocji </NavLink>
        </div>
    )
}


export function Happiness () {
    return (
        <div>
            <EmotionCards
                img={happiness4sq}
                title="Radość"
                description='Choć kojarzy się ze szczęściem, szczęściem nie jest. To silna emocja wywołana przez coś przyjemnego: widok, myśl, dźwięk, zapach, doznanie cielesne albo połączenie tych wszystkich bodźców. Może towarzyszyć wysiłkowi fizycznemu, pracy, relaksowi oraz wszelkiej twórczości.'
                to='/happiness'
            />
        </div>
    )
}

export function Madness () {
    return (
        <div>
            <EmotionCards
                img={madness1sq}
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
                img={sadness}
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
                img={curiosity}
                title="Ciekawość"
                description='To zarówno uczucie, stan, cecha jak i postawa życiowa. Charakteryzuje je dążenie do poznawania nowych rzeczy, eksplorowania, przekraczania granic i zadawania pytań. To także głód wiedzy, pociąg do nieznanego, pęd do zgłębiania tajemnic. Zaciekawienie świadczy o otwartej postawie człowieka wobec życia.'
                to='/curiosity'
            />
        </div>
    )
}

export function Love () {
        return (
            <div>
                <EmotionCards
                    img={love}
                    title="Miłość"
                    description='Stan emocjonalny, który wyraża w świadomości uczucie całkowitego spełnienia. Jest synonimem szczęścia w rozumieniu potocznym towarzyszącym zabawie, zadowoleniu lub satysfakcji z przeżywanych doznań, wykonywanych czynności lub przywoływanych w pamięci wspomnień. '
                />
            </div>
    )
}

export function Trust () {
    return (
        <div>
            <EmotionCards
                img={trust}
                title="Zaufanie"
                description='Stan emocjonalny, który wyraża w świadomości uczucie całkowitego spełnienia. Jest synonimem szczęścia w rozumieniu potocznym towarzyszącym zabawie, zadowoleniu lub satysfakcji z przeżywanych doznań, wykonywanych czynności lub przywoływanych w pamięci wspomnień. '
            />
        </div>
    )
}
export function Loneliness () {
    return (
        <div>
            <EmotionCards
                img={lonelisness}
                title="Samotność"
                description='Stan emocjonalny, który wyraża w świadomości uczucie całkowitego spełnienia. Jest synonimem szczęścia w rozumieniu potocznym towarzyszącym zabawie, zadowoleniu lub satysfakcji z przeżywanych doznań, wykonywanych czynności lub przywoływanych w pamięci wspomnień. '
            />
        </div>
    )
}








