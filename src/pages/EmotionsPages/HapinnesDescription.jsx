import React from "react";
import {EmotionsPagesComponent} from "./Layout/EmotionsPagesLayout.jsx";
import {PageFooter} from "../../components/PageFooter/PageFooter.jsx";


export function HappinessDescription() {
    return (
        <div>
            <EmotionsPagesComponent
                emotionTitle='Radość'
                emotionDescMain='Choć kojarzy się ze szczęściem, szczęściem nie jest. To silna emocja wywołana przez coś przyjemnego: widok, myśl, dźwięk, zapach, doznanie cielesne albo połączenie tych wszystkich bodźców. Może towarzyszyć wysiłkowi fizycznemu, pracy, relaksowi oraz wszelkiej twórczości. Często pojawia się też w reakcji na jakieś wspomnienie czy wyobrażenie. Zwykle towarzyszy jej pobudzenie, poczucie zadowolenia i spełnienia oraz przypływ energii. Mamy wtedy ochotę skakać, klaskać w ręce, śmiać się, krzyczeć, tańczyć, brać w ramiona obiekt naszej radości lub osoby, z którymi ją przeżywamy. Narastająca i przedłużająca się radość to euforia - kiedy ją odczuwamy, świat wydaje nam się piękny, przepełnia nas poczucie harmonii, a nawet pojawia się lekkie odurzenie. Problem jest wtedy, gdy sztucznie pragniemy pod trzymać ten stan, np. za pomocą środków psychoaktywnych. Radość przychodzi do nas spontanicznie i na chwilę, jest jak po wrót do dzieciństwa - jeśli umiemy sobie na nią pozwolić i dopuścić do siebie. Cicha - jest jak tlący się płomyczek, który dodaje nam energii, dzielona i przeżywana z innymi - rośnie w wielki ogień.'
                emotionSubtitle='Po co nam to uczucie?'
                emotionDesc='Pozwala dostrzegać piękno w małych rzeczach oraz znosić chwile smutku. Jest promieniem, który rozjaśnia ciemność, daje nadzieję i poczucie pełni jestestwa. Uczy cieszyć się chwilą, być wdzięcznym za to, czego doświadczamy i dzielić się tym z innymi. Informuje nas o tym, co jest dla nas bezpieczne, przyjemne, ważne. Daje siłę do przekraczania granic i eksplorowania nowych obszarów, a także pozwala zregenerować się i pod nieść po trudnych zdarzeniach. Jest bazą zdrowia psychicznego i fizycznego, a poza tym stanem uwielbianym przez nasze Wewnętrzne Dziecko, które karmi się nią najbardziej i najzdrowiej.'
                emotionTask='Zadania dla Ciebie'
                emotionTask1='Zastanów się, jakie rzeczy, osoby, myśli czy czynności sprawiają ci radość i dlaczego. Zarezerwuj sobie każdego dnia czas na małe przyjemności i bądź bardzo uważny, by nie zmarnować dużych przyjemności. Żeby sobie na nie także pozwalać, bo często z tym mamy największy problem - że duża radość to nie dla mnie.'
                emotionTask2='Zauważaj momenty zachwytu, radości, uznania, satysfakcji - nie lekceważ ich, zbieraj je, twórz z nich bukiety i stawiaj je sobie w wazonie. Ucz się od dzieci swoich i cudzych zabawy i lekkości. Wspieraj swoje wewnętrzne Dziecko, aby stawało się z powrotem coraz bardziej spontaniczne i pogodne.'
                emotionTask3='Świadomie planuj dobre przeżycia, doceniaj też dobre wspomnienia, bądź z nich dumny i ciesz się nimi, kiedy wracają, ale nie żyj, spoglądając do tyłu, bo to, co jest teraz, jest jedynym, co jest.'
                emotionSource='Źródło: Poznaj siebie. Karty Emocji. Katarzyna Miller, Joanna Olekszyk.'
            />
            {/*<PageFooter />*/}
        </div>
    );
}