import { generateColorHTML } from "./color.js"
import { generateInteriorHTML } from "./interior.js"
import { generateTechnologiesHTML } from "./technologies.js"
import { generateWheelsHTML } from "./wheels.js"
import {  addCustomOrder} from "./database.js"
import { Orders } from "./orders.js"





document.addEventListener(
    "click",
    (changeEvent) => {
        if (changeEvent.target.id === "orderButton") {
            addCustomOrder()
        }
    }
)

export const createHTML = () => {
  
    return `
        <h1>Cars R Us</h1>
        <article class="choices">
            <section class="choices__colors options">
                <h2>Paint Colors</h2>
                ${generateColorHTML()}
            </section>
            <section class="choices__interior options">
                <h2>Interior</h2>
              ${generateInteriorHTML()}
            </section>
            <section class="choices__technology options">
                <h2>Technology</h2>
                ${generateTechnologiesHTML()}
            </section>
            <section class="choices__wheels options">
                <h2>Wheels</h2>
                ${generateWheelsHTML()}
        </article>
        <article>
            <button id="orderButton">Create Custom Order</button>
        </article>
        
        <article class="customOrders">
            <h2>Custom Car Orders</h2>
         ${Orders()}
        </article>
    `
}