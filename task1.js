"use strict";

const catalog = {
    catalogBlock: null,
    cart: null,
    
    list: [
        {
            product_id: 123,
            product_name: 't-shirt',
            price: 2,
        },
        {
            product_id: 652,
            product_name: 'pants',
            price: 5,
        }
    ],

    init(catalogBlockClass, cart) {
        this.catalogBlock = document.querySelector(`.${catalogBlockClass}`);
        this.cart = cart;
        this.render();
        this.addEventHandlers();
    },

    render() {
        if (this.getCatalogListLength() > 0) {
            this.renderCatalogList();
        } else {
            this.renderEmptyCatalog();
        }
    },

    addEventHandlers() {
        this.catalogBlock.addEventListener('click', event => this.addToBasket(event));
    },

    addToBasket (event) {
        if (!event.target.classList.contains('product__add-to-cart')) return;
        const product_id = +event.target.dataset.product_id;
        const productToAdd = this.list.find((product) => product.product_id === product_id);
        this.cart.addToBasket(productToAdd);
    },

    getCatalogListLength() {
        return this.list.length;
    },

    renderCatalogList() {
        this.catalogBlock.innerHTML = '';
        this.list.forEach(item => {
            this.catalogBlock.insertAdjacentHTML('beforeend', this.renderCatalogItem(item));
        });
    },

    renderCatalogItem(item) {
        return `<div class="product">
        <h3>${item.product_name}</h3>
        <p>${item.price} руб.</p>
        <button class="product__add-to-cart" data-product_id="${item.product_id}">В корзину</button>
        </div>`;
    },

    renderEmptyCatalog() {
        this.catalogBlock.innerHTML = '';
        this.catalogBlock.textContent = 'Каталог товаров пуст';
        this.textSum = '';
    },
};

const cart = {
    cartBlock: null,
    adressBlock: null,
    commentBlock: null,
    clrCartButton: null,
    textSum: '',
    btnCart: null,
    btnAdress: null,
    btnComment: null,
    
    goods: [
        {
            product_id: 123,
            product_name: 't-shirt',
            quantity: 1,
            price: 2,
        }
    ],

    init(cartBlockClass, clrCartButton) {
        this.cartBlock = document.querySelector(`.${cartBlockClass}`);
        this.adressBlock = document.querySelector(`.adress`);
        this.commentBlock = document.querySelector(`.comment`);
        this.clrCartButton = document.querySelector(`.${clrCartButton}`);
        this.btnCart = document.querySelector('.btn-cart');
        this.btnAdress = document.querySelector('.btn-adress');
        this.btnComment = document.querySelector('.btn-comment');
        
        this.addEventHandlers();
        this.render();
        this.addCloseHandler();

        this.adressBlock.style.display = 'none';
        this.commentBlock.style.display = 'none';
    },

    addEventHandlers() {
        this.clrCartButton.addEventListener('click', this.dropCart.bind(this));
    },

    dropCart() {
        this.goods = [];
        this.render();
    },

    render() {
        if (this.getCartGoodsLength() > 0) {
            this.renderCartList();
        } else {
            this.renderEmptyCart();
        }
    },

    addToBasket (product) {
        if (product) {
            const findInBasket = this.goods.find((item) => product.product_id === item.product_id);
            if (findInBasket) {
                findInBasket.quantity++;
                } else {
                    this.goods.push({...product, quantity: 1});
                }
                this.render();
        } else {
            alert('Ошибка добавления!');
        }
    },

    getCartGoodsLength() {
        return this.goods.length;
    },

    renderEmptyCart() {
        this.cartBlock.innerHTML = '';
        this.cartBlock.textContent = 'Корзина пуста';
        this.textSum.textContent = '';
    },

    renderCartList() {
        this.cartBlock.innerHTML = '';
        this.goods.forEach(item => {
            this.cartBlock.insertAdjacentHTML('beforeend', this.renderCartItem(item));
        });
        this.textSum = document.querySelector('.text-sum');
        this.textSum.innerHTML = this.getText();
    },

    renderCartItem(item) {
        return `<div>
        <h3>${item.product_name}</h3>
        <p>${item.price} руб.</p>
        <p>${item.quantity} шт.</p>
        </div>`;
    },

    calcSum() {
        let listSum = 0;
        this.goods.forEach(good => {
            listSum += good.price * good.quantity;
        });
        
        console.log(listSum);
        return listSum;
    },

    calcQuantity() {
        let listQuantity = 0;
        this.goods.forEach(good => {
            listQuantity += good.quantity;
        });
        
        console.log(listQuantity);
        return listQuantity;
        
    },

    getText() {
        return `<p>В корзине ${this.calcQuantity()} товаров на ${this.calcSum()} руб.</p>`;
    },

    addCloseHandler(){
        this.btnCart.addEventListener('click', this.closeFunctionBtnCart.bind(this));
        this.btnAdress.addEventListener('click', this.closeFunctionBtnAdress.bind(this));
        this.btnComment.addEventListener('click', this.closeFunctionBtnComment.bind(this));
    },

    closeFunctionBtnCart() {
        this.cartBlock.style.display = 'none';
        this.textSum.textContent = '';
        this.clrCartButton.style.display = 'none';
        this.btnCart.style.display = 'none';
        this.adressBlock.style.display = 'block';
    },

    closeFunctionBtnAdress() {
        this.adressBlock.style.display = 'none';
        this.commentBlock.style.display = 'block';
    },

    closeFunctionBtnComment () {
        this.commentBlock.style.display = 'none';
        this.clrCartButton.style.display = 'block';
        this.btnCart.style.display = 'block';
        renderEmptyCart()
    }
};

catalog.init('catalog', cart);
cart.init('cart', 'clr-cart');
    





