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

export const search = (filtre) => {
    const tmpAnnonces = annonces.filter(a => a.titre.includes(filtre) || a.description.includes(filtre))
    return tmpAnnonces
}
