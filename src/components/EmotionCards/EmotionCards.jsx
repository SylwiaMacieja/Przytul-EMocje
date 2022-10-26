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
            <NavLink className='Card__btn' to={props.to}>Przyjrzyj się emocji</NavLink>
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
                description='Skrajne wzburzenie i pobudzenie, spowodowane gniewem i złością, wyrażające się zwykle w postaci krzyku, gwałtownych ruchów, ekspresyjnej mimiki i napięcia ciała. Wściekłość charakteryzuje fizyczne pobudzenie, które może wymykać się już naszej kontroli. To stan, w którym prawie nie docierają do nas racjonalne argumenty, jesteśmy na nie głusi i ślepi.'
                to='/madness'
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
                description='Pojawia się wówczas, kiedy czegoś nam brak. Jest to uczucie miękkie, które czyni nas słabszymi, a nie silniejszymi. Wycisza, a nie motywuje do działania. Spowalnia, osłabia, kieruje uwagę do wewnątrz, a nie na zewnątrz. Jest uczuciem, które może trafiać głęboko, duchowo uszlachetniać. Raczej nie wzburza do agresywnych zachowań.'
                to='/sadness'
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
                    description='Kiedy otrzymujemy miłość, podwyższa to nasze poczucie własnej wartości, przynosi spełnienie może zaspokoić głód (miłości). Możemy poczuć wtedy uniesienie, błogość, radość, satysfakcję, triumf. Miłość bywa mylona z zakochaniem lub pożądaniem, tymczasem to poczucie trwania z kimś w silnej i głębokiej więzi emocjonalnej duchowej.'
                    to='/love'
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
                description='Jest podstawą wszelkich międzyludzkich więzi i umów: związków, ale też umów społecznych oraz działalności instytucji. To przekonanie, że ktoś lub coś jest wobec nas uczciwe. Wiara, wiedza lub nadzieja (oparta na pewnych przesłankach), że dana sytuacja rozwinie się tak, jak tego pragniemy lub że dana osoba zachowa się tak, jak byśmy tego od niej oczekiwali.'
                to='/trust'
            />
        </div>
    )
}
export function Loneliness () {
    return (
        <div>
            <EmotionCards
                img={lonelisness}
                title="Tęsknota"
                description='Stan emocjonalny, który wyraża w świadomości uczucie całkowitego spełnienia. Jest synonimem szczęścia w rozumieniu potocznym towarzyszącym zabawie, zadowoleniu lub satysfakcji z przeżywanych doznań, wykonywanych czynności lub przywoływanych w pamięci wspomnień. '
                to='/loneliness'
            />
        </div>
    )
}








