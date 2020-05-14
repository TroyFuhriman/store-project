import Cart from "../Models/Cart.js";
import store from "../store.js";

//Public
class CartsService {
  delete(id) {
    store.State.cart = store.State.cart.filter(c => c.id != id)
  }


}

const ITEM_SERVICE = new CartsService();
export default ITEM_SERVICE;