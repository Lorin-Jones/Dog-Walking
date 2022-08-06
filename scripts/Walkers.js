import { assignedCityNames, filterWalkerCitiesByWalker } from "./CityList.js"
import { getWalkers } from "./database.js"

const walkers = getWalkers()


export const Walkers = () => {
    let walkerHTML = "<ul>"
    
    for (const walker of walkers) {
        walkerHTML += `<li id="walker--${walker.id}">${walker.name}</li>`
    }

    walkerHTML += "</ul>"
    return walkerHTML

}

/*
import walkercities
set output value equal to variable
inside Eventlistener function, under walker loop,
loop through walkercities
if walker.id === walkercities.walkerid
for (city of cities)
if 
for each walkerId find the corresponding cityIds and print their names from cities
for (let walker of walkercities)
    if ()

*/
document.addEventListener(
    "click",
    (clickEvent) => {
        const itemClicked = clickEvent.target
        if (itemClicked.id.startsWith("walker")) {
            const [,walkerId] = itemClicked.id.split("--")

            for (const walker of walkers) {
                if (walker.id === parseInt(walkerId)) {
                    const assignments = filterWalkerCitiesByWalker(walker)
                    const cities = assignedCityNames(assignments)
                    window.alert(`${walker.name} services ${cities}`)
                }
            }
        }
    }
)