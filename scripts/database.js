/*
    This module contains all of the data, or state, for the
    application. It exports two functions that allow other
    modules to get copies of the state.
*/

const database = {
    colors: [
        {id: 1, name: "Silver", price: 250},
        {id: 2, name: "Midnight Blue", price: 300},
        {id: 3, name: "Firebrick Red", price: 350},
        {id: 4, name: "Spring Green", price: 400},
    ],
    interiors: [
        {id: 1, material: "Beige Fabric", price:650},
        {id: 2, material: "Charcoal Fabric", price: 700},
        {id: 3, material: "White Leather", price: 3000},
        {id: 4, material: "Black Leather", price: 3500},
    ],
    technologies: [
        {id: 1, package:"Basic Package(basic sound system)", price: 1750},
        {id: 2, package:"Navigation Package(includes integrated navigation controls)", price: 2500},
        {id: 3, package:"Visibility Package(includes side and rear cameras", price: 3750},
        {id: 4, package: "Ultra Package(includes navigation and visibility packages", price: 5000},
    ],
    wheels: [
         {id: 1, tire: "17-inch Pair Radial", price:375},
         {id: 2, tire: "17-inch Pair Radial Black", price: 400},
         {id: 3, tire: "18-inch Pair Spoke Silver", price: 500},
         {id: 4, tire: "18-inch Pair Spoke Black", price: 600}
    ],
    chosenOption: [
        
        {id: 1, 
        colorId: 2,
        interiorId:2, 
        technologyId:3,
        wheelsId: 4, 
        timestamp: 123456789}
],
 orderBuilder: {}
}

export const getColor = () => {
    return database.colors.map (unicorn => ({...unicorn}))
}

export const getInterior = () => {
    return database.interiors.map (dragons => ({...dragons}))
}
export const getTechnologies = () => {
    return database.technologies.map (faeries => ({...faeries}))
}
export const getWheels = () => {
    return database.wheels.map (elves => ({...elves}))
}
export const getOrders = () => {
    return database.chosenOption.map (trolls => ({...trolls}))
}

//exporting functions that are responsible for setting state.
export const setColor = (id) => {
    database.orderBuilder.colorId = id
    console.log (database.orderBuilder)
}

export const setInterior = (id) => {
    database.orderBuilder.interiorId = id
    console.log (database.orderBuilder)
}

export const setTechnology = (id) => {
    database.orderBuilder.technologyId = id
    console.log (database.orderBuilder)
}

export const setWheels = (id) => {
    database.orderBuilder.wheelsId = id
    console.log (database.orderBuilder)
}
export const addCustomOrder = () => {
    // Copy the current state of user choices
    const newOrder = {...database.orderBuilder}

    // Add a new primary key to the object
    const lastIndex = database.chosenOption.length - 1
    newOrder.id = database.chosenOption[lastIndex].id + 1

    // Add a timestamp to the order
    newOrder.timestamp = Date.now()

    // Add the new order object to custom orders state
    database.chosenOption.push(newOrder)

    // Reset the temporary state for user choices
    database.orderBuilder = {}

    // Broadcast a notification that permanent state has changed
    document.dispatchEvent(new CustomEvent("stateChanged"))
    console.log(database.chosenOption)
}
