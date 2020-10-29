const baseApi = "https://world.openfoodfacts.org/api/v0"

export const getNomProduit = (codeBarre) => {
    return fetch(`${baseApi}/product/${codeBarre}.json`).then(res => res.json())
}

