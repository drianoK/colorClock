// console.log('Heló, világ');

// console.log(2);

// console.log(2 + 3);

// console.log('Heló, ' + 'világ');

// console.log('Heló, ' + 2 + 'világ');

// console.log(Date())

// var time = '12:13';
// console.log(time);

// var time = '12:13';
// var seconds = ':14';
// console.log(time + seconds);

function colorClock() {

    var date = new Date();

    var hours = date.getHours();
    var minutes = date.getMinutes();
    var seconds = date.getSeconds();

    if (seconds <= 9) {
        seconds = "0" + seconds;
    }

    // if (ha ez igaz) {
    // hajtsd vegre ezt;
    // }

    if (minutes <= 9) {
        minutes = "0" + minutes;
    }

    if (hours <= 9) {
        hours = "0" + hours;
    }


    var clockFace = hours + ':' + minutes + ':' + seconds;
    var hexColor = '#' + hours + minutes + seconds;


    document.getElementById('clock').innerHTML = clockFace;
    document.body.style.background = hexColor;

    // ha
    // a 'seconds' változó kisebb, mint 10
    // legyen előtte a szöveggé konvertáláskor egy nulla


    setTimeout(function () {
        colorClock();
    }, 1000);

}

colorClock();


document.body.style.background = 'red'; // Pirosra festette a hátteret