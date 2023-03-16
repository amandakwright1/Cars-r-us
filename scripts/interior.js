import { getInterior, setInterior} from "./database.js"

const arrayOfInterior = getInterior()

document.addEventListener(
    "change",
    (event) => {
        if (event.target.id === "interiors") {
            setInterior(parseInt(event.target.value))
        }
    }
)




export const generateInteriorHTML = () => {
    let html = `<select id="interiors">
    <option value="0">Choose an interior Material</option>`

   
    for (const interiorObject of arrayOfInterior) {
        html +=  `<option value="${interiorObject.id}"> ${interiorObject.material}</option>`
    }

    html += `</select>`
   
    return html
}