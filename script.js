const c = (el) => document.querySelector(el);
const cs = (el) => document.querySelectorAll(el);

pizzaJson.map((item, index) => {
    let pizzaItem = document.querySelector('.pizza-item').cloneNode(true);
    document.querySelector('.pizza-area').append(pizzaItem);

});
