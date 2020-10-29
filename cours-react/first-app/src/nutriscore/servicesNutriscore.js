const baseApi = "https://world.openfoodfacts.org/api/v0"

export const getNomProduit = (codeBarre) => {
    return fetch(`${baseApi}/product/${codeBarre}.json`).then(res => res.json())
}

// export const getAuthor = (key) => {
//     return fetch(`${baseApi}${key}.json`).then(res=>res.json())
// }