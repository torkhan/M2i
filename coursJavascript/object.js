//Ecriture des objects littéral
// const p1 = {
//     nom : 'abadi',
//     prenom : 'ihab'
// }

//Definir des objets à l'aide d'une fonction
// function personne(n,p) {
//     this.nom = n
//     this.prenom = p
//     this.afficher = function() {
//         console.log(this.nom)
//         console.log(this.prenom)
//     }
// }

// const p1 = new personne("toto", "tata")
// const p2 = new personne("titi", "minet")

// console.log(p1.nom)
// console.log(p1.prenom)

//Definir des objets avec des classes
class Personne {
    constructor(n,p) {
        this.nom = n,
        this.prenom = p
    }

    afficher() {
        console.log(this.nom)
        console.log(this.prenom)
    }
}

class Etudiant extends Personne {
    constructor(n,p) {
        super(n,p)
    }
}

const p1 = new Personne("toto", "tata")
const p2 = new Personne("titi", "minet")

p1.afficher()

p2.afficher()

p2.marcher = function() {
    console.log(this.nom + " marche")
}

p2.marcher()