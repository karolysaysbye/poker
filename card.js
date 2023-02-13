class Card extends HTMLElement{
// ♠, ♥, ♦, ♣.-
    constructor(){
        super(); //ős konstruktort meghívja
        const shadow = this.attachShadow({mode:'open'});

        let card = document.createElement('div');
        card.classList.add('class');
        // card.className='card'; 

        let sign = document.createElement('div');

        sign.classList.add('sign');
        let jelek = ['♠','♥','♦','♣'];
        sign.innerHTML=jelek[Number(this.dataset.sign)];

        if ((this.dataset.sign==0) || (this.dataset.sign==1));
            card.classList.add('red');

        let number = document.createElement('div');
        number.classList.add('number');
       // number.innerHTML=this.getAttribute('data-ertek');

       let ertek = this.dataset.ertek;
       let tisztek = ['J','Q','K'];
       if (ertek==1) ertek = 'A';
       else {
        if (ertek>10) ertek = tisztek[ertek-11];

       };
       number.innerHTML=ertek;

        let value = document.createElement('div');
        number.classList.add('value');

        value.appendChild(number);
        value.appendChild(sign);

        card.appendChild(value);
        card.appendChild(sign.cloneNode(true));
        card.appendChild(value.cloneNode(true));

        let linkes = document.createElement('link');
        linkes.setAttribute('rel','stylesheet');
        linkes.setAttribute('href','card.css');

        shadow.appendChild(linkes);
        shadow.appendChild(card);
    }

};

customElements.define('my-card',Card);