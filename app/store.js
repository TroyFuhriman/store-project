import Item from "./Models/Item.js";
import Cart from "./Models/Cart.js";

let _state = {
  /** @type {Item[]} */
  items: [
    new Item({ title: "kitten sweater", price: "100", description: "it's super cute omg", imgUrl: "http://placekitten.com/200/300" })
  ],
  cart: [],
};

class Store {
  buy(id) {
    let index = _state.items.findIndex(i => i.id == id)
    if (index == -1) {
      console.error("invalid id")
      return;
    }
    _state.cart.push(new Cart(_state.items[index]))
    let Cindex = _state.cart.findIndex(i => i.id == id)
    _state.cart[Cindex].quantity++


    console.log(_state.cart);

  }
  /**
   * Provides access to application state data
   */
  get State() {
    return _state;
  }
  addItem(item) {
    _state.items.push(item)
  }
}

const STORE = new Store();
export default STORE;
