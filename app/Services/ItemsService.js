import Item from "../Models/Item.js";
import store from "../store.js";

//Public
class ItemsService {
  buy(id) {
    store.buy(id)
  }
  newItem(rawItem) {
    let item = new Item(rawItem);
    store.addItem(item)
  }
}

const ITEM_SERVICE = new ItemsService();
export default ITEM_SERVICE;