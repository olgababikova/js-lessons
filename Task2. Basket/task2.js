const basket = {
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

    countBasketPrice() {
        return this.goods.reduce((totalPrice, cartItem) => totalPrice += cartItem.price, 0);
    },

    getMessage() {
        const goodsQuantity = this.goods.length;
        const message = document.createElement('div');
        const text = '';

        if (goodsQuantity == 0) {
            text = 'Корзина пуста!'
        } else {
            text = 'В корзине:' + ${goodsQuantity} + 'товаров на сумму' + ${totalPrice} + 'рублей'
        };
        

        message.style.width = '100px';
        message.style.height = '50px';
        message.innerHTML = text;
        message.style.textAlign = 'center';

    },

};

getMessage();

