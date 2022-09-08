const basket = {
    basketContainer: document.getElementById('basket'),

    goods: [
        {
            good_id: 123,
            title: 't-shirt',
            brand: 'H&M',
            count: 1,
            price: 2,
            photo: "/.photo1,jpg",
            description: "desc1.txt",
        },
        {
            good_id: 652,
            title: 'pants',
            brand: 'H&M',
            count: 2,
            price: 5,
            photo: "/.photo2,jpg",
            description: "desc2.txt",
        }
    ],

    // countBasketPrice() {
    //     return this.goods.reduce((totalPrice, cartItem) => totalPrice += cartItem.price, 0);
    // },

    // getMessage() {
    //     const goodsQuantity = this.goods.length;
    //     const message = document.createElement('div');
    //     const text = '';

    //     if (goodsQuantity == 0) {
    //         text = 'Корзина пуста!'
    //     } else {
    //         text = ('В корзине:' ${goodsQuantity} 'товаров на сумму' ${totalPrice} 'рублей')
    //     };
        

    //     message.style.width = '100px';
    //     message.style.height = '50px';
    //     message.innerHTML = text;
    //     message.style.textAlign = 'center';

    // },

    addToBasket (good) {
        if (good in goods) {good.count += 1 //проверяем, есть ли товар в корзине, если есть, добавляем кол-во
        } else {this.goods.push(good) //если нет, пушим
        };
    },

    renderBasket() {
        for (let a = 0; a < this.goods.length; a++) {
            const goodCell = document.createElement('tr');
            this.basketContainer.appendChild(goodCell);//создаем и добавляем клетки каждого товара
            for (let b = 0; b < 7; col++) {
                const goodAttrCell = document.createElement('tr');
                this.basketContainer.appendChild(goodAttrCell);//создаем и добавляем строки атрибутов товара
                goodAttrCell.innerHTML = goods[a][b]; //заполняем атрибутами товара
            };
        
        }
    },

    init() {
        this.renderBasket(this.goods);
    },
};



const catalog = {
    goods: [
        {
        good_id: 123,
        title: 't-shirt',
        brand: 'H&M',
        count: 100,
        price: 2,
        photo: "/.photo1,jpg",
        description: "desc1.txt",
        },
        {
        good_id: 652,
        title: 'pants',
        brand: 'H&M',
        count: 50,
        price: 5,
        photo: "/.photo2,jpg",
        description: "desc2.txt",
        }
    ],
    basket: null,

    init (basket) {
        this.basket = basket;
        
    },

    addToBasket () {
        let good; 
        this.basket.addToBasket(good);
    }
};

catalog.init(cart);