import { getTechnologies, setTechnology} from "./database.js"

const arrayOfTechnologies = getTechnologies()

document.addEventListener(
    "change",
    (event) => {
        if (event.target.id === "technologies") {
            setTechnology(parseInt(event.target.value))
        }
    }
)





export const generateTechnologiesHTML = () => {
    let html = `<select id="technologies">
    <option value="0">Choose a Technology Package</option>`

   
    for (const technologyObject of arrayOfTechnologies) {
        html +=  `<option value="${technologyObject.id}"> ${technologyObject.package}</option>`
    }

    html += `</select>`
   
    return html
}