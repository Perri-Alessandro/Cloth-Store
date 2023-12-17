console.log("UAAAAAAAAAAAAAAAAAAAAAAAAAA"); /* XD */

///////////////////////////////////////////////////////////////////// HEADER ////////////////////////////////////////////////////////////////////////////////

///////////////////////////////////////////////// NAV, DIV E CONTENUTO NAVBAR ALTA //////////////////////////////////////////////
const header = document.getElementsByTagName("header")[0];
const navBar = document.createElement("nav");
header.appendChild(navBar);

const divNavBar = document.createElement("div");
divNavBar.classList.add("navBar1");
divNavBar.innerHTML = `<a class = "aPrimaMetàNav1">CONTATTACI</a>
                             <a class = "aPrimaMetàNav1">SERVIZI</a>
                             <a class = "aSecondaMetàNav1"><i class="fas fa-shopping-bag fa-lg"></i></a>
                             <a class = "aSecondaMetàNav1"><i class="fas fa-heart fa-lg"></i></a>
                             <a class = "aSecondaMetàNav1"><i class="fas fa-user fa-lg"></i></a>`;

console.log("CREATA NAV-BAR 1:", divNavBar);
navBar.appendChild(divNavBar);

////////////////////////////////////////////////////////// H1 //////////////////////////////////////////////////////////////////////////
const titolo = document.createElement("h1");
titolo.innerHTML = `<strong>Cloth Store</strong>`;
console.log("CREATO <h1>:", titolo);
navBar.appendChild(titolo);

////////////////////////////////////////////// DIV E CONTENUTO NAVBAR FISSA (SOTTO ALTA) ////////////////////////////////////////////////////////////
const arrayNavBarFissa = [];
const divNavBarFissa = document.createElement("div");
divNavBarFissa.classList.add("navBarFissa");
divNavBarFissa.innerHTML = `<a class = "aNavFissa">TESSUTI</a>
                            <a class = "aNavFissa">CAMICE</a>
                            <a class = "aNavFissa">IN OFFERTA</a>
                            <a class = "lenteNavFissa"><i class="fas fa-search"></i></a>`;

navBar.appendChild(divNavBarFissa);
const ancoreNavBarFissa = divNavBarFissa.getElementsByTagName("a");
for (let i = 0; i < ancoreNavBarFissa.length; i++) {
  arrayNavBarFissa.push(ancoreNavBarFissa[i]);
  // ancoreNavBarFissa[i].style.position = "fixed y";
}
console.log("CREATO ARRAY CON DENTRO <a> DI NAVBAR FISSA:", arrayNavBarFissa);

///////////////////////////////////////////////////////////////// MAIN ////////////////////////////////////////////////////////////////////////////////////////////////7

/*///////////// CREO 2 ARRAY,1 PER LE IMG ED 1 PER I DIV CHE LE CONTERRANNO,///////////////////////////////////////////
AGGIUNGO ARRAY DIV CON DENTRO ARRAY DI IMMAGINI AD OGNI <A>, PER NAVBAR FISSA IN HOVER //////////////////////////////////7/*/
const arrayNavFissaHover = [];
const imgNavHover = [
  [
    "https://placedog.net/200",
    "https://placedog.net/200",
    "https://placedog.net/200",
    "https://placedog.net/200",
    "https://placedog.net/200",
    "https://placedog.net/200",
  ],
  [
    "https://placedog.net/215",
    "https://placedog.net/215",
    "https://placedog.net/215",
    "https://placedog.net/215",
    "https://placedog.net/215",
    "https://placedog.net/215",
  ],
  [
    "https://placedog.net/210",
    "https://placedog.net/210",
    "https://placedog.net/210",
    "https://placedog.net/210",
    "https://placedog.net/210",
    "https://placedog.net/210",
  ],
];

arrayNavBarFissa.forEach((elementi, indice) => {
  const divHoverNavBarF = document.createElement("div");
  divHoverNavBarF.classList.add("divHoverNavBarF");
  divHoverNavBarF.style.display = "none";
  arrayNavFissaHover.push(divHoverNavBarF);
  elementi.appendChild(divHoverNavBarF);

  const imgArray = imgNavHover[indice];
  if (imgArray && imgArray.length > 0) {
    divHoverNavBarF.innerHTML = imgArray
      .map((imgSrc) => `<img src="${imgSrc}">`)
      .join(""); /* JOIN - TRASFORMO ARRAY DI STRINGHE IMG IN SINGOLA STRINGA
                    CONSENTENDO DI CONCATENARE TUTTI GLI ELEMENTI DI ARRAY IN UNA STRINGA */

    const aNavFissa = document.querySelectorAll(".aNavFissa");
    aNavFissa.forEach((a, i) => {
      a.addEventListener("mouseenter", function () {
        arrayNavFissaHover[i].style.display = "inline-block";
      });
      a.addEventListener("mouseleave", function () {
        arrayNavFissaHover[i].style.display = "none";
      });
    });
  } else {
    return;
  }
});

console.log(
  "CREATO ARRAY CONTENENTE 1 <div> PER OGNI <a> DI NAVBAR FISSA (per hover):",
  arrayNavFissaHover
);
console.log(
  "CREATO ARRAY CONTENENTE IMMAGINI PER OGNI <div> DENTRO AD <a> (TRANNE LENTE) DI NAVBAR FISSA:",
  imgNavHover
);
console.log(
  "AGGIUNTO EFFETTO DI HOVER PER DIV DENTRO <a> DI NAV FISSA (TRANNE LENTE)"
);

// CREO TAG SECTION, ARTICLE, IMG, H2, P, A.
// PER OGNI IMMAGINE DI ARRAY imgMain CREATA SEZIONE CON DENTRO ARTICOLO, E DENTRO ARTICOLO
// OLTRE AD IMG ANCHE H2-P ED A
const imgMain = [
  "/assets/images/foto3.jpg",
  "/assets/images/foto2.jpg",
  "/assets/images/foto1.jpg",
];
const titoliSezioni = [
  "TESSUTI SOLO SU PRENOTAZIONE",
  "I NOSTRI TESSUTI",
  "CAMICE",
];
const descrizioneSezioni = [
  "XD XD XD XD XD XD XD XD XD XD XD XD XD XD XD XD XD XD XD XD XD XD DX XD DX XD XD XD XD XD XD XD XD XD XD XD XD XD XD XD XD XD XD",
  "XD XD XD XD XD XD XD XD XD XD XD XD XD XD XD XD XD XD XD XD XD XD DX XD DX XD XD XD XD XD XD XD XD XD XD XD XD XD XD XD XD XD XD",
  "XD XD XD XD XD XD XD XD XD XD XD XD XD XD XD XD XD XD XD XD XD XD DX XD DX XD XD XD XD XD XD XD XD XD XD XD XD XD XD XD XD XD XD",
];
const aSezioni = [
  "Scopri la selezione",
  "Scopri la selezione",
  "Scopri la selezione",
];

const creaContenutoMain = function () {
  const main = document.getElementsByTagName("main")[0];
  imgMain.forEach((elemento, indice) => {
    const section = document.createElement("section");
    const article = document.createElement("article");
    const img = document.createElement("img");
    const h2 = document.createElement("h2");
    const p = document.createElement("p");
    const a = document.createElement("a");

    img.classList.add("imgMain");
    img.src = elemento;
    h2.textContent = titoliSezioni[indice];
    p.textContent = descrizioneSezioni[indice];
    a.textContent = aSezioni[indice];
    // a.href = "uaaaa.com"

    main.appendChild(section);
    section.appendChild(article);
    article.appendChild(img);
    article.appendChild(h2);
    article.appendChild(p);
    article.appendChild(a);
  });
  console.log(
    "PER OGNI IMMAGINE DI ARRAY imgMain CREATA <section> CON DENTRO <article>, E DENTRO <article> > <img>, <h2>, <p>, <a>",
    imgMain
  );
};

creaContenutoMain();

// FIXA ATTACCO DI NAV BAR IN ALTO
