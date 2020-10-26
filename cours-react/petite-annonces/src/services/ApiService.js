//Création d'une promise

export let firstPromise = new Promise((resolve, reject) => {
    //Execution des instructions dans la promise
    setTimeout(()=>{
        //resolve("promise resolved")
        reject("promise rejected")
    },3000)
})