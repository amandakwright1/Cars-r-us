import {setWheels, getWheels} from "./database.js"

const arrayOfWheels = getWheels()

document.addEventListener(
    "change",
    (event) => {
        if (event.target.id === "wheels") {
            setWheels(parseInt(event.target.value))
        }
    }
)

export const generateWheelsHTML = () => {
    let html = `<select id="wheels">
    <option value="0">Choose Specialty Tires</option>`

   
    for (const wheelObject of arrayOfWheels) {
        html +=  `<option value="${wheelObject.id}"> ${wheelObject.tire}</option>`
    }

    html += `</select>`
   
    return html
}