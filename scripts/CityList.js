import { getWalkers } from "./database.js"
import { getCities } from "./database.js"
import { getWalkerCities } from "./database.js"

const walkers = getWalkers()
const filteredCities = getWalkerCities()
const cities = getCities()

export const CityList = () => {
    let citiesHTML = "<ul>"
   
    
    for (const city of cities) {
        citiesHTML += `<li>${city.name}</li>`
    }

    citiesHTML += "</ul>"

    return citiesHTML
}
/*
find all cities for the walker and display them
one function to find the cities for each walker
one function to display a string for each walker
*/
export const filterWalkerCitiesByWalker = (walker) => {
    const assignments = []
    for (const assignment of filteredCities) {
        if (assignment.walkerId === walker.id) {
            assignments.push(assignment)
        }
    }
    return assignments
}
// append "and ${city.name}" to cityNames string IF cityNames string already has a value
// array.length--check length of assignments array 
// 
export const assignedCityNames = (assignments) => {
    let cityNames = ""
    for (const assignment of assignments) {
        for (const city of cities) {
            if (city.id === assignment.cityId) {
                cityNames = `${cityNames}${city.name} `
            }   
        }
    }
    return cityNames
}