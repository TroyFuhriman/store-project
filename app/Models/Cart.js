import { generateId } from "../utilities.js"

export default class Cart {
  constructor(data) {
    this.title = data.title
    this.price = data.price
    this.description = data.description
    this.id = data.id || generateId()
    this.imgUrl = data.imgUrl
    this.quantity = data.quantity
  }

  get Template() {
    return /*html*/`
    <div class="col-2">
            <div class="card">
                <img src="${this.imgUrl}" alt="">
                <p>${this.title}</p>
                <p>qty:${this.quantity}</p>
                <p>$${this.price}</p>
                <button class="btn btn-danger" onclick="app.cartsController.delete('${this.id}')">delete</button>
            </div>
        </div>`
  }
}