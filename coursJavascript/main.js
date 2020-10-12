// console.log("Hello world")
//Déclaration de variable
//Avant ES6
//Avec le mot clé var
//var nom = "abadi"
//globale
//nom = "abadi"

//Apres ES6+
//muable
// const nom = 'abadi'
// console.log(nom)
// //mutable
// let age = 33
// age = 34
// console.log(age)
// //Tableau
const tab = ["toto", 10, true, ["t", "o"]]
// console.log(tab)
// for(let i=0; i < tab.length; i++)
// {
//     console.log(i)
//     console.log(tab[i])
// }
//boucle while
//let i=10
// while( i < tab.length) {
//     console.log(i)
//     console.log(tab[i])
//     i++;
// }

//boucle do while

// do {
//     console.log(i)
//     console.log(tab[i])
//     i++;
// }while(i < tab.length)

// while(i < 5) {
//     console.log(i)
//     i++
// }

// do {
//     console.log(i)
//     i++
// }while(i < 5)

// for(let element of tab) {
//     console.log(element)
// }

//fonction en javascript

// direBonjour("toto")
// direBonjour("tata")

// function direBonjour(nom) {
//     console.log("bonjour "+nom)
// }

// const direBonjour = function(nom) {
//     console.log("bonjour " + nom)
// }

//Apres es6+
// const direBonjour = (nom) => {
//     console.log("bonjour "+ nom)
// }

// direBonjour("toto")
// direBonjour("tata")

//Fonction comme parametres (callBack)

// const calcule = (a,b, methodeCalcule) => {
//     console.log(methodeCalcule(a,b))
// }

// const addition = (a, b) => {
//     return a+b
// }

// const soustraction = (a,b) => {
//     return a-b
// }

// calcule(10,20,addition)

// calcule(10,4, soustraction)

// calcule(10,5, function(a,b) {return a * b})
// calcule(10,5, (a,b) => {return a * b})

//fonction anonyme
// (function(nom){
//     console.log("bonjour "+nom)
// })("toto")

// const addition = (nombres) => {
//     let total = 0
//     for(let nombre of nombres) {
//         total += nombre
//     }
//     return total
// }
// const soustraction = (...nombres) => {
//     let total = (nombres != undefined && nombres.length > 0) ? nombres[0] : 0
//     for(let i =1 ; i< nombres.length; i++) {
//         total -= nombres[i]
//     }
//     return total
// }
// const calcule = (methodeCalcule, ...nombres) => {
//     console.log(methodeCalcule(nombres))
// }
// calcule(addition, 10,30,40)

//les objets
const personne = {
    //Attribut nom
    nom : "abadi",
    //Attribut prenom
    prenom : "ihab",
    //méthode afficher
    afficher : function(){
        console.log("les infromations de la personne sont "+this.nom +" "+this.prenom)
    }
}

// console.log(personne.nom)
// console.log(personne.prenom)
// personne.nom = "toto"
// personne.adresse = "Tourcoing"
// console.log(personne.adresse)
personne.marcher = function(destination) {
    console.log(this.nom + " marche vers "+ destination)
}
personne.afficher()
personne.marcher("Lille")


