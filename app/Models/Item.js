import { generateId } from "../utilities.js"

export default class Item {
  constructor(data) {
    this.title = data.title
    this.price = data.price
    this.description = data.description
    this.id = data.id || generateId()
    this.imgUrl = data.imgUrl
    this.quantity = 0
  }

  get Template() {
    return /*html*/`
    <div class="col-3">
                <div class="card mt-3 ml-2">
                    <img class="card-img-top" src="${this.imgUrl}" alt="">
                    <div class="card-body">
                        <h4 id="title" class="card-title">${this.title}</h4>
                        <p id="price" class="card-text">${this.price}</p>
                        <p id="description" class="card-text">${this.description}
                        </p>
                        <button class="btn btn-outline-success" onclick="app.cartsController.buy('${this.id}')">add to cart</button>
                    </div>
                </div>
            </div>`
  }
}