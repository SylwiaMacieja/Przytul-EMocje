import React from "react";
import {EmotionsPagesComponent} from "./Layout/EmotionsPagesLayout.jsx";
import {PageFooter} from "../../components/PageFooter/PageFooter.jsx";





export function CuriosityDescription() {
    return (
        <div>
            <div className='Emotions__container'>
                <EmotionsPagesComponent
                    emotionTitle='Ciekawość'
                    emotionDescMain='To zarówno uczucie, stan, cecha jak i postawa życiowa. Charakteryzuje je dążenie do poznawania nowych rzeczy, eksplorowania, przekraczania granic i zadawania pytań. To także głód wiedzy, pociąg do nieznanego, pęd do zgłębiania tajemnic. Zaciekawienie świadczy o otwartej postawie człowieka wobec życia. Kiedy mówimy, że coś wzbudza naszą ciekawość, znaczy to zwykle, że nas interesuje, pociąga, intryguje. Jest nowe, inne, ale też w jakiś sposób zagadkowe i wymagające od nas wysiłku. Zdrowa ciekawość często łączy się z takimi wartościami jak otwartość, odwaga, dociekliwość czy wnikliwość. Przesadna i powierzchowna to brawura, lekkomyślność, a bardzo często i wścibstwo. Zaspakajanie ciekawości jest bardzo istotne dla naszego zdrowia psychicznego oraz rozwoju jako jednostek i gatunku. Trzeba być jednak bardzo uważnym na cudze granice.'
                    emotionSubtitle='Po co nam to uczucie?'
                    emotionDesc='Dzięki ciekawości uczymy się, rozwijamy, zdobywamy wiedzę, poszerzamy horyzonty, ale też oswajamy nieznane, wychodzimy ze strefy komfortu i podnosimy nasze poczucie własnej wartości. Ciekawość uczy nas tolerancji i życzliwości wobec innych. W tym procesie niezbędna jest jednak umiejętność zatrzymania się co jakiś czas na chwilę, skupienia i ułożenia w głowie i sercu tego, co do tej pory poznaliśmy.'
                    emotionTask='Zadania dla Ciebie'
                    emotionTask1='Zastanów się, co wzbudza twoją ciekawość. Jakie dziedziny sztuki lub nauki? A może elementy życia codziennego? Zwykle interesujesz się czymś na chwilę i zaraz przerzucasz na coś nowego? A może lubisz zgłębiać jeden temat - zarówno teoretycznie, jak i praktycznie.'
                    emotionTask2='A teraz pomyśl chwilę nad tym, jak duża jest twoja otwartość na nieznane? Czy często wychodzisz poza swoją strefę komfortu i próbujesz nowych rzeczy A może wolisz to, co lubisz i znasz? Czy nie zamyka  to na nowe spojrzenia na pewne sprawy?'
                    emotionTask3='Co jest granicą dla twojej ciekawości, której nie chcesz przekraczać? Czyjaś prywatność? Bezpośrednie zagrożenie? A może normy kulturowe lub społeczne?'
                    emotionSource='Źródło: Poznaj siebie. Karty Emocji. Katarzyna Miller, Joanna Olekszyk.'/>
                {/*<PageFooter />*/}
            </div>
        </div>
    )
}
