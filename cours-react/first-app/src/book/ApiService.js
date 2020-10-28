const baseApi = "http://openlibrary.org"
export const getBook = (isbn) => {
    return fetch(`${baseApi}/isbn/${isbn}.json`).then(res => res.json())
}

export const getAuthor = (key) => {
    return fetch(`${baseApi}${key}.json`).then(res=>res.json())
}