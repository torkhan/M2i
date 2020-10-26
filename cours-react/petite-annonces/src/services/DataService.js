export const annonces = []
let compteurAnnonce = 1

export const ajouterAnnonce = (annonce) => {
    const tmpAnnonce = {
        ...annonce,
        id : compteurAnnonce
    }
    annonces.push(tmpAnnonce)
    compteurAnnonce++
}
