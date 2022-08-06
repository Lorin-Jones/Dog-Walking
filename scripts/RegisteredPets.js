import { getPets } from "./database.js"



export const RegisteredPets = () => {
    let petHTML = "<ul>"
    const pets = getPets()
    for (const pet of pets) {
        petHTML += `<li>${pet.name}</li>`
    }

    petHTML += "</ul>"

    return petHTML
}

