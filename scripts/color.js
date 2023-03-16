import { getColor, setColor} from "./database.js"

const arrayOfColor = getColor()

document.addEventListener(
    "change",
    (event) => {
        if (event.target.id === "colors") {
            setColor(parseInt(event.target.value))
        }
    }
)




export const generateColorHTML = () => {
    let html = `<select id="colors">
    <option value="0">Choose a paint color</option>`

   
    for (const colorObject of arrayOfColor) {
        html +=  `<option value="${colorObject.id}"> ${colorObject.name}</option>`
    }

    html += `</select>`
   
    return html
}