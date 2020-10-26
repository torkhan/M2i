export const personnes = []

const users = [
    {login : 'ihab', password : '1234567'}
]

export let indexPersonne = 0

export const modifierIndexPersonne = (index) => {
    indexPersonne = index
}

export const getPersonneById = (id) => {
    return personnes.find(p=>p.id == id)
}

export let isLogged = false

export const login = (login, password) => {
    const u = users.find(l => l.login == login && l.password == password)
    // if(u == undefined) {
    //     return false
    // } else {
    //     return false
    // }
    return u != undefined
}
export const changeIsLogged = (log) => {
    isLogged = log
}