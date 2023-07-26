import { menuArray } from './data.js'

//render menu of products to select from menuArray
function renderMenu(array) {
  let menuHtml = ''

  array.forEach(function(item){
    menuHtml += `
      <li class="item-list">
        <div class="item-info">
          <p class="emoji">${item.emoji}</p>
          <div>
            <h3>${item.name}</h3>
            <p>${item.ingredients}</p>
            <p>${item.price}</p>
          </div>
        </div>
        <button id="btn-add" data-id=${item.id}>+</button>
      </li>
      <hr>
      `
  })
  //console.log(menuHtml)
  return menuHtml
}

function totalPrice() {
  
}

//render order list in ui
let orderHtml = ''
function renderOrder(item) {
  orderHtml += item
  document.getElementById('order-el').style.display = 'block'
  document.getElementById('order-list').innerHTML = orderHtml
}

//add item to order list
function addItemToOrder(id) {
  let itemToAdd = ''
  const itemSelected = menuArray.filter(function(item) {
    return item.id === Number(id)
  })[0]
  itemToAdd += `
    <div class="order-item">
      <div>
        <p>${itemSelected.name}</p>
        <p class="order-remove">remove</p>
      </div>
      <p>${itemSelected.price}</p>
    </div>
    `
    return renderOrder(itemToAdd)
  }

//APP--START//
export function app() {
  //render menu products
  document.getElementById('list-el').innerHTML = renderMenu(menuArray)

  //select item from menu
  document.addEventListener('click', function(e){
    if(e.target.dataset.id){
      addItemToOrder(e.target.dataset.id)
    }
  })
}