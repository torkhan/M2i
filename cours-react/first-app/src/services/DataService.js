export const personnes = []

export let indexPersonne = 0

export const modifierIndexPersonne = (index) => {
    indexPersonne = index
}

export const getPersonneById = (id) => {
    return personnes.find(p=>p.id == id)
}