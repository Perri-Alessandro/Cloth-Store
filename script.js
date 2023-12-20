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
  "https://placedog.net/280",
  "https://placedog.net/270",
  "https://placedog.net/260",
  "https://placedog.net/250",
  "https://placedog.net/245",
];
const titoliSezioni = [
  "TESSUTI SOLO SU PRENOTAZIONE",
  "I NOSTRI TESSUTI",
  "CAMICE",
  "SPEDIZIONE E RESO",
  "LA NOSTRA STORIA",
];
const descrizioneSezioni = [
  "XD XD XD XD XD XD XD XD XD XD XD XD XD XD XD XD XD XD XD XD XD XD DX XD DX XD XD XD XD XD XD XD XD XD XD XD XD XD XD XD XD XD XD",
  "XD XD XD XD XD XD XD XD XD XD XD XD XD XD XD XD XD XD XD XD XD XD DX XD DX XD XD XD XD XD XD XD XD XD XD XD XD XD XD XD XD XD XD",
  "XD XD XD XD XD XD XD XD XD XD XD XD XD XD XD XD XD XD XD XD XD XD DX XD DX XD XD XD XD XD XD XD XD XD XD XD XD XD XD XD XD XD XD",
  "XD XD XD XD XD XD XD XD XD XD XD XD XD XD XD XD XD XD XD XD XD XD DX XD DX XD XD XD XD XD XD XD XD XD XD XD XD XD XD XD XD XD XD",
  "XD XD XD XD XD XD XD XD XD XD XD XD XD XD XD XD XD XD XD XD XD XD DX XD DX XD XD XD XD XD XD XD XD XD XD XD XD XD XD XD XD XD XD",
];
const aSezioni = [
  "Scopri la selezione",
  "Scopri la selezione",
  "Scopri la selezione",
  "Scopri il servizio",
  "Scopri chi siamo",
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
    if (indice < imgMain.length - 2) {
      img.classList.add("imgMain");
    } else {
      section.classList.add("broImg2Main");
      article.classList.add("broImg2Main");
      img.classList.add("img2Main");
      h2.classList.add("h2Img2Main");
      p.classList.add("pImg2Main");
      a.classList.add("aImg2Main");
    }
  });
};
console.log(
  "PER OGNI IMMAGINE DI ARRAY imgMain CREATA <section> CON DENTRO <article>, E DENTRO <article> > <img>, <h2>, <p>, <a>, ALLE ULTIME 2 VERRà AGGIUNTA UNA CLASSE DIVERSA PER OGNI ELEMENTO FRATELLO",
  imgMain
);

creaContenutoMain();

////////////////////////////////////////////////////////////////// FOOTER /////////////////////////////////////////////////////////////////////////////////

////////////////////// CREO ARRAY PER UL ED LI, PER OGNI ELEMENTO DI ARRAY UL CREO UN LI, E PER OGNI INDICE
////////////////////// DI ARRAY LI CREO UN LI. CREO UN ANCORA PER OGNI LI E CE LA METTO DENTRO.
const arrayUl = [
  ["ASSISTENZA CLIENTI"],
  ["CHI SIAMO"],
  ["AREA LEGALE E PRIVACY"],
  ["FOLLOW US"],
];
const arrayLi = [
  [
    "CONTATTA CLOTH STORE",
    "CHIAMA ORA",
    "SEGUI IL TUO ORDINE",
    "SPEDIZIONE E CONSEGNA",
    "ORDINI E PAGAMENTO",
  ],
  ["COLLABORA CON NOI", "XDXDXDXDXDXDXDXDXD"],
  [
    "CONDIZIONI DI VENDITA",
    "POLITICA DI RESI E CAMBI",
    "INFORMATIVA PRIVACY",
    "COOKIE POLICY",
  ],
  ["instagram", "facebook", "twitter", "linkedin"],
];

const footer = document.getElementsByTagName("footer")[0];
const divFooter = document.createElement("div");
footer.appendChild(divFooter);

arrayUl.forEach((ulElements, index) => {
  const ul = document.createElement("ul");
  const h6 = document.createElement("h6");
  divFooter.appendChild(ul);
  ul.appendChild(h6);
  h6.textContent = ulElements;

  arrayLi[index].forEach((liElements) => {
    const li = document.createElement("li");
    const a = document.createElement("a");
    a.classList.add("aFooter");

    li.textContent = a;
    a.textContent = liElements;
    ul.appendChild(li);
    li.appendChild(a);
  });
  console.log(
    "CREATO DIV NEL FOOTER CON DENTRO 1 UL PER OGNI ELEMENTO IN ARRAY-UL, DENTRO LI E DENTRO AD LI LE ANCORE"
  );
});
