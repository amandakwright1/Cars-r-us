import { getOrders, getColor,getInterior, getTechnologies,getWheels} from "./database.js"

const buildOrderListItem = (order) => {
    const arrayOfcolors = getColor()
const arrayOfInterior = getInterior()
const arrayOfTechnologies = getTechnologies()
const arrayOfWheels = getWheels()

// Remember that the function you pass to find() must return true/false
const foundColor = arrayOfcolors.find(
    (colors) => {
        return colors.id === order.colorId
    }
)
const foundInterior = arrayOfInterior.find(
    (interiors) => {
        return interiors.id === order.interiorId
    }
)
const foundTechnology = arrayOfTechnologies.find(
    (technologies) => {
        return technologies.id === order.technologyId
    }
)
    const foundWheels = arrayOfWheels.find(
        (wheels) => {
            return wheels.id === order.wheelsId
        }
)
//Lets you get cost with less than 3 selections
//let totalCost = 0
//if(foundMetal){totalCost += foundMetal.price}
//if(foundStyle){totalCost += foundStyle.price}
//if(foundSize){totalCost += foundSize.price}

let totalCost = foundColor.price + foundInterior.price + foundTechnology.price + foundWheels.price

const costString = totalCost.toLocaleString("en-US", {
    style: "currency",
    currency: "USD"
})

return`
<li>
    Order #${order.id} cost ${costString}
</li>`

  
}


export const Orders = () => {
    /*
        Can you explain why the state variable has to be inside
        the component function for Orders, but not the others?
    */
    const orders = getOrders()

    
    let html = "<ul>"

    const listItems = orders.map(buildOrderListItem)

    html += listItems.join("")
    html += "</ul>"

    return html
}
