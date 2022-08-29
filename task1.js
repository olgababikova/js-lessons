console.log(1);
var i = 1;
while (i <= 100) {
    for (j = 2; j <= i; j++) {
        if (i % j === 0 && j < i) {
        break;
    } else if (i === j) {
        console.log(i);
    }
}
    i++;
}


    