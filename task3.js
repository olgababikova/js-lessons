function getBasketPrice () {
    var basket = [
        {
            title: 'bananas',
            count: 5,
            price: 20
        },
        {
            title: 'oranges',
            count: 3,
            price: 50
        },
        {
            title: 'apples',
            count: 10,
            price: 10
        },
    ];
    var sum = 0;
    for (var item of basket) {
        sum += item.count * item.price;
    }
}

