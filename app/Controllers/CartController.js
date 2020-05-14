import _cartService from "../Services/CartsService.js";
import _itemService from "../Services/ItemsService.js";
import _store from "../store.js"

function _draw() {
  let carts = _store.State.cart
  let template = ''
  carts.forEach(c => template += c.Template)
  document.getElementById("cart").innerHTML = template
}
//Public
export default class CartsController {


  constructor() {
    _draw()
  }
  buy(id) {
    _itemService.buy(id)
    _draw()
  }

  delete(id) {
    _cartService.delete(id)
    _draw()
  }
}