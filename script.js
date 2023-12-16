///////////////////////////////////////////////// DIV E CONTENUTO NAVBAR //////////////////////////////////////////////
const navBar = document.getElementsByTagName("nav")[0];
navBar.classList.add("navBar");

const contenutoNavBar = document.createElement("div");
contenutoNavBar.innerHTML = `<a class = "aPrimaMetàNav1">CONTATTACI</a>
                             <a class = "aPrimaMetàNav1">SERVIZI</a>
                             <a class = "aSecondaMetàNav1"><i class="fas fa-shopping-bag fa-lg"></i></a>
                             <a class = "aSecondaMetàNav1"><i class="fas fa-heart fa-lg"></i></a>
                             <a class = "aSecondaMetàNav1"><i class="fas fa-user fa-lg"></i></a>`;

console.log("NAV-BAR 1:", contenutoNavBar);
navBar.appendChild(contenutoNavBar);

const navBarFissa = document.getElementsByTagName("nav")[1];
navBarFissa.classList.add("navBarFissa");

const contenutoNavBarFissa = document.createElement("div");
contenutoNavBarFissa.innerHTML = `<a class = "aNavFissa">TESSUTI</a>
                                  <a class = "aNavFissa">CAMICE</a>
                                  <a class = "aNavFissa">IN OFFERTA</a>
                                  <a class = "lenteNavFissa"><i class="fas fa-search"></i></a>`;

console.log("NAV-BAR FISSA:", contenutoNavBarFissa);
navBarFissa.appendChild(contenutoNavBarFissa);
