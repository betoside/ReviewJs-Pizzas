let modalQt = 1;

const c = (el) => document.querySelector(el);
const cs = (el) => document.querySelectorAll(el);

pizzaJson.map((item, index) => {
    let pizzaItem = c('.pizza-item').cloneNode(true);

    pizzaItem.setAttribute('data-key', index);
    pizzaItem.querySelector('.pizza-item--img img').src = item.img;
    pizzaItem.querySelector('.pizza-item--price').innerHTML = `R$ ${item.price.toFixed(2)}`;
    pizzaItem.querySelector('.pizza-item--name').innerHTML = item.name;
    pizzaItem.querySelector('.pizza-item--desc').innerHTML = item.description;
    pizzaItem.querySelector('a').addEventListener('click', (e)=>{
        e.preventDefault();
        let key = e.target.closest('.pizza-item').getAttribute('data-key');
        modalQt = 1;

        c('.pizzaBig img').src = pizzaJson[key].img;
        c('.pizzaInfo h1').innerHTML = pizzaJson[key].name;
        c('.pizzaInfo .pizzaInfo--desc').innerHTML = pizzaJson[key].description;
        c('.pizzaInfo .pizzaInfo--actualPrice').innerHTML =  `R$ ${pizzaJson[key].price.toFixed(2)}`;
        c('.pizzaInfo--size.selected').classList.remove('selected');
        cs('.pizzaInfo--size').forEach((size, sizeIndex)=>{
            if (sizeIndex == 2) {
                size.classList.add('selected');
            }
            size.querySelector('span').innerHTML = pizzaJson[key].sizes[sizeIndex];
        });

        // c('.pizzaInfo .pizzaInfo--size').innerHTML = pizzaJson[key].sizes[0];
        /*
            <div class="pizzaBig">
                <img src="" />
            </div>

        <h1>--</h1>
        <div class="pizzaInfo--desc">--</div>
        <div class="pizzaInfo--sizearea">
            <div class="pizzaInfo--sector">Tamanho</div>
            <div class="pizzaInfo--sizes">
                <div data-key="0" class="pizzaInfo--size">PEQUENA <span>--</span></div>
                <div data-key="1" class="pizzaInfo--size">MÉDIO <span>--</span></div>
                <div data-key="2" class="pizzaInfo--size selected">GRANDE <span>--</span></div>
            </div>
        </div>
        */ 
        // pizzaJson[key].id
        // pizzaJson[key].name
        // pizzaJson[key].img
        // pizzaJson[key].price
        // pizzaJson[key].sizes
        // pizzaJson[key].sizes[0]
        // pizzaJson[key].sizes[1]
        // pizzaJson[key].sizes[2]
        // pizzaJson[key].description
        
        c('.pizzaInfo--qt').innerHTML = modalQt;

        c('.pizzaWindowArea').style.opacity = 0;
        c('.pizzaWindowArea').style.display = 'flex';
        setTimeout(() => {
            c('.pizzaWindowArea').style.opacity = 1;
        }, 200);
    });
    // pizzaItem.querySelector('a').click();
    c('.pizza-area').append(pizzaItem);
});
