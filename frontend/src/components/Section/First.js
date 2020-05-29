import React from 'react';
import titleImage from '../../assets/titleimage1.png';
import titleImage1 from '../../assets/types.jpg';

function First() {
    return (
        <div id="first">
            <h3>Typy pokemonów</h3>
            <hr className="style-one"/>
            <div className="col-12 center_img"><img src={titleImage} alt="Logo" style={{width: '100%'}} className="marg"/></div>
            <h5>Jak rodzaj pokemona wpływa na rozgrywkę?</h5>
            <p>Pokemony dzieli się ze względu na ich typy. Jedne są wodne, inne chociażby trawiaste. Wariantów stworków jest bardzo dużo. Często łączą one w sobie cechy dwóch różnych rodzajów. Pomiędzy odmianami podopiecznych trenerów występuje wiele zależności. Z pozoru wydaje się to bardzo złożone i skomplikowane. Jednak po nabyciu tej cennej wiedzy zawsze będziesz wiedział, jakiego pokemona wybrać do walki.</p>
            <div className="col-12 center_img"><img src={titleImage1} alt="Logo" style={{width: '100%'}} className="marg"/></div>
            <p>Wyżej ukazane zestawienie dokładnie opisuje zależności pomiędzy odmianami pokemonów. Ilustracje postaci są posegregowane względem ich rodzajów. Powyżej znajdują się dwie karty – jedna zielona, druga czerwona. Pomiędzy nimi są wymienione typy podopiecznych. Po lewej stronie można zobaczyć gatunki pokemonów, na które ataki rodzaju stworka ukazanego na środku są mało efektywne (zadane obrażenia są mnożone przez 0,80 ich wartości). Z kolei po prawej stronie sytuacja ma się odwrotnie. Widnieją tam odmiany pokemonów, które są podatne na ciosy typu umieszczonego na środku (zadane obrażenia są mnożone przez 1,25 ich wartości). Warto brać pod uwagę wszystkie typy pokemona. Jeśli jest on przykładowo wodno-psychiczny, trzeba przeanalizować jego oba rodzaje. Należy pamiętać, że wariant „dark” (ciemność) nie występuje w Pokemon GO. Z tego powodu użytkownicy aplikacji mogą go pominąć.</p>
            <p>Mimo wszystko warto pamiętać o pozostałych statystykach znajdujących się w mobilnej wersji gry. Przy wyborze stworka do walki, liczy się także jego CP oraz IV. Typy są tylko dopełnieniem przygotowań przed pojedynkami.</p>
            <h5>W jaki sposób do tego podchodzić?</h5>
            <p>Rodzaje pokemonów mogą mieć bardzo duże znaczenie, dlatego warto być z nimi obeznanym. Czasem posiadana wiedza przez gracza może dać mu przewagę nad przeciwnikiem. Dlatego pamiętajcie o zasadach rozgrywki. Uczcie się walki i bądźcie lepszymi trenerami.</p>
            <hr className="style-one"/>
        </div>
    );
}

export default First;