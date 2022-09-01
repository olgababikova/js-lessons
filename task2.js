var good1 = {
    title: 't-shirt',
    brand: 'H&M',
    count: 100,
    price: 2,
    photo: "/.photo1,jpg",
    description: "desc1.txt",
};
var good2 = {
    title: 'pants',
    brand: 'H&M',
    count: 50,
    price: 5,
    photo: "/.photo2,jpg",
    description: "desc2.txt",
};
var basket = [];

basket.push(good1);
basket.push(good2);

function getBasketPrice() {
    var sum = 0;
        for (good of basket) {
            sum += product.count * product.price;
        }

    console.log('your sum is' + sum);
}

