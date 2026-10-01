lancerJeu()
let inputEcriture = document.getElementById("inputEcriture")
console.log(inputEcriture)

let btnValiderMot = document.getElementById("btnValiderMot")
console.log(btnValiderMot)

let divZoneProposition = document.querySelector(".zoneProposition")
console.log(divZoneProposition)

let spanScore = document.querySelector(".zoneScore span")
console.log(spanScore)

let listeBtnRadio = document.querySelectorAll(".optionSource input")
console.log(listeBtnRadio)

let baliseImage = document.getElementById("premiereImage");
baliseImage.setAttribute("alt", "ceci est une image de test modifiée");
baliseImage.src = "cheminImage.jpg";
baliseImage.classList.add("nouvelleClasse")
baliseImage.classList.remove("photo")