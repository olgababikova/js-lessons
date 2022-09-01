var units;
var tens;
var hundreds;
var userNumber;

function numberToObject(userNumber) {

    if (userNumber >= 0 && userNumber <= 999) {
        console.log(userNumber);
        hundreds = parseInt(userNumber / 100);
        tens = parseInt((userNumber % 100) / 10);
        units = ((userNumber % 100) % 10);

    }
    else {
        console.log('Your number is out of range 0 to 999');

    };

    const objectNumber = {
        'numberOfUnits': units,
        'numberOfTens': tens,
        'numberOfHundreds': hundreds,
    };
    console.log(objectNumber);
};

numberToObject(0);