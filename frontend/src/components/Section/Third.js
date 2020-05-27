import React from 'react';
import titleImage from '../../assets/instinct.png';
import titleImage2 from '../../assets/mystic.png';
import titleImage3 from '../../assets/valor.png';

function Third() {
    return (
        <div id="third">
            <h3>Frakcje</h3>
            <hr className="style-one"/>
            <p>Do wyboru mamy trzy frakcje – Instinct, Mystic oraz Valor. Każdy z trenerów staje przed wyborem, do której z nich dołączy.</p>
            <p>Szansę na wybranie jednej z frakcji otrzymujemy wraz z osiągnięciem 5. poziomu trenera:</p>
            <ul>
                <li>Team Instinct (frakcja żółta) prowadzona jest przez Sparka. Lider wyznaje zasadę, że pokemony są stworzeniami wyposażonymi w świetny instynkt. Uważa on, że ta cecha ma decydujący wpływ na proces wykluwania się ich z jaj;</li>
                <li>Team Mystic (frakcja niebieska) prowadzona jest przez Blanche. Za główną zaletę pokemonów uważa ich bezmierną mądrość. Lider poświęca się badaniom nad ewolucjami pokemonów;</li>
                <li>Team Valor (frakcja czerwona) prowadzony jest przez Candelę. Uważa ona, że pokemony cechuje wielka siła fizyczna i jeszcze większe serce do walki. Poszukuje ona sposobu na wyzwolenie prawdziwej mocy w tych stworzeniach.</li>
            </ul>
            <p>Podczas wyboru frakcji zauważymy, że do każdego z liderów przypisano jednego z trzech legendarnych ptaków znanych z pierwszej generacji pokemonów. Patronem Instinct jest Zapdos, sylwetka Articuno gości w tle Mystic natomiast Moltres pojawia się przy wyborze frakcji Valor. Do tej pory nie ujawniono czy wybór frakcji zdeterminuje możliwość zdobycia jednego z tych legendarnych stworzeń. Dyskusji podlega także kwestia czy wybór jednej z trzech frakcji wpłynie na mechanikę wykluwania się jaj, restrykcji związanych z ewolucją oraz treningiem CP pokemonów.</p>
            <div className="col-12 center_img"><img src={titleImage} alt="Logo" className="img marg"/></div>
            <div className="col-12 center_img"><img src={titleImage2} alt="Logo" className="img marg" /></div>
            <div className="col-12 center_img"><img src={titleImage3} alt="Logo" className="img marg" /></div>
            <hr className="style-one"/>
        </div>
    );
}

export default Third;