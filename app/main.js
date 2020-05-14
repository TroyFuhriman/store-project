import ItemsController from "./Controllers/ItemsController.js";
import CartsController from "./Controllers/CartController.js"

class App {
  itemsController = new ItemsController();
  cartsController = new CartsController();
}

window["app"] = new App();
