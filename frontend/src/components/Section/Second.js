import React from 'react';
import titleImage from '../../assets/titleimage2.jpg';
import titleImage2 from '../../assets/gymprzejety.jpg';
import titleImage3 from '../../assets/Gym-szary.png';
import titleImage4 from '../../assets/gym-przejmowanie.jpg';
import titleImage5 from '../../assets/gym-walka.jpg';
import titleImage6 from '../../assets/gym-wygrana.jpg';

function Second() {
    return (
        <div id="second">
            <h3>Gymy – przejmowanie, walki i treningi</h3>
            <hr className="style-one"/>
            <div className="col-12 center_img"><img src={titleImage} alt="Logo" style={{width: '100%'}} className="marg"/></div>
            <p>Warto wspomnieć, że około 30-50% portali z Ingress przekształcono w Gymy lub PokeStopy, które możemy spotkać podczas gry w Pokemon GO. Gymy znajdują się nawet w miejscach, które wcześniej nie były portalami w Ingress. Podobno każda wioska/miasto posiadające swoją nazwę na mapie, ma przynajmniej jeden taki Gym w okolicy. To taka ciekawostka dla osób mieszkających w małych miejscowościach, które obawiają się, że mogą mieć ograniczony dostęp do Gymów.</p>
            <p>Gymy stanowią głownie biblioteki, ratusze, muzea, uniwersytety, kościoły i kaplice. Z kolei PokeStopy to mniejsze zabytki, pomniki, tablice informacyjne, miejska sztuka etc. Tak wygląda Gym (w tym przypadku przejęty) na mapie, neutralne są szare:</p>
            <div className="col-12 center_img"><img src={titleImage2} alt="Logo" className="img marg" /></div>
            <div className="col-12 center_img"><img src={titleImage3} alt="Logo" className="marg"/></div>
            <p>Lider Gymu (czyli osoba, która zdeponowała najsilniejszego pokemona) ma obok swojego awatara koronę, którą widzą wszyscy gracze. Na ekranie widzimy nick gracza i jego lvl. Możemy też zobaczyć, ile punktów CP ma zdeponowany pokemon.</p>
            <p>Dla Gymu najważniejszy jest prestiż, oznacza on jego siłę. Im więcej silnych pokemonów w danych Gymie – tym wyższy jego prestiż. Warto wspomnieć, że dany trener w Gymie może zostawić tylko jednego pokemona. Pozostali trenerzy z teamu powinni dołączyć tam swoje.</p>
            <div className="col-12 center_img"><img src={titleImage4} alt="Logo" className="img marg"/></div>
            <p>Żeby wyzwać Gym na pojedynek, klikamy w ikonkę rękawicy w dolnym prawym rogu ekrany. Po wyzwaniu Gymu przeciwnika mamy możliwość wyboru drużyny składającej się z 6 pokemonów. Poniżej macie przykładową drużynę pokemonów – jeśli chcecie któregoś z nich zmienić, wystarczy na niego nacisnąć i wybrać innego. Jeśli wszystko wam pasuje, naciskamy GO i zaczynamy walkę.</p>
            <div className="col-12 center_img"><img src={titleImage5} alt="Logo" className="img marg"/></div>
            <p>Możecie też unikać ataków przeciwnika – wystarczy naciskać na prawo od naszego pokemona lub na lewo – będzie wtedy odskakiwać na boki.</p>
            <p>Jeżeli jeden z naszych pokémonów straci przytomność i dobije do 0 HP wyskakuje następny z kolejki do walki. Walka jest szybka, realistyczna i widowiskowa. Jest też ograniczona czasowo. Na pokonanie każdego z pokemonów mamy określoną liczbę czasu – licznik jest umieszczony między paskiem HP naszego pokemon i pokemona przeciwnika.</p>
            <p>Pokonanie lidera obniża prestiż Gymu i dodaje nam punkty XP. Jeśli obniżymy prestiż Gymu do zera, stanie się on neutralny. Po pokonaniu lidera raz, możemy przystąpić ponownie do walki. Trzeba jednak pamiętać, że nasz pokemon będzie ranny, a pokemon broniący Gymu w pełni sił. Warto uleczyć swoje najsilniejsze pokemony przed kolejną rundą.</p>
            <p>Jeśli wyzwiemy Gym na pojedynek i wygramy, pokonane pokemony wracają do trenera jako „fainted„.</p>
            <div className="col-12 center_img"><img src={titleImage6} alt="Logo" className="img marg"/></div>
            <p>W Gymie możemy też trenować – nie ma to wpływu na pokemony zdeponowane tam przez trenerów. Po wygranej walce pokemony są uzdrawiane. Trenować możemy w Gymach należących do naszej drużyny – tak jak w przypadku walki klikamy na ikonkę rękawicy.</p>
            <p>Jeśli wybierzemy trening, do walki staje przeciwnik „komputerowy”. Pokemony atakują w czasie rzeczywistym, „myślą” i używają przedmiotów. Trening nie jest walką w systemie turowym. Walka jest w czasie rzeczywistym.</p>
            <p>Na razie nie ma też limitu na treningi. Można trenować w jednym Gymie w nieskończoność.</p>
            <p>Dodatkowo, na razie też nie można nic robić ze zdeponowanym w Gymie pokemonem. Nie możemy go podmienić na innego i nie możemy też zabrać go z powrotem do swojej kolekcji. Musimy czekać, aż ktoś go pokona i wtedy wróci na naszą listę. Pokemony, które zdeponowaliśmy w Gymie mają obok swojego obrazka taki oto znaczek Gymu.</p>
            <hr className="style-one"/>
        </div>
    );
}

export default Second;
