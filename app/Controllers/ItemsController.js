import _itemService from "../Services/ItemsService.js";
import _store from "../store.js"


function _draw() {
  let items = _store.State.items
  let template = ''
  items.forEach(i => template += i.Template)
  document.getElementById("items").innerHTML = template
}
//Public
export default class ItemsController {


  constructor() {
    _draw()
  }

  newItem(event) {
    event.preventDefault();
    let formData = event.target;
    let rawItem = {
      title: formData.title.value,
      price: formData.price.value,
      description: formData.description.value,
      imgUrl: formData.imgUrl.value
    };
    formData.reset();
    _itemService.newItem(rawItem);
    _draw();
  }



}