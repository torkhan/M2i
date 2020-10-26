
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

export const getAnnonceById = (id) => {
    return annonces.find(a => a.id == id)
}


export let favoris = []

export const ajouterAuFavoris = (id) => {
    if(!dejaFavoris(id)) {
        const annonce = annonces.find(a=> a.id == id)
        favoris.push(annonce)
    }
}

export const retirerDesFavoris = (id) => {
    favoris = favoris.filter(a => a.id != id)
}

export const dejaFavoris = (id) => {
    const annonce = favoris.find(a => a.id == id)
    return annonce != undefined
}