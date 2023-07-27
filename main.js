import './style.css'
import { app } from './app.js'

document.querySelector('#app').innerHTML = `
    <ul class="list-container" id="list-el">
    </ul>
    <div id="order-el">
        <h3>Your order</h3>
        <ul id="order-list">
        </ul>
        <hr>
        <div>
            <div class="order-total">
                <p>Total price:</p>
                <p id="total">0</p>
            </div>
            <button class="order-complete-btn">Complete order</button>
        </div>
    </div>
`
app()
