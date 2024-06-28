
// creating a random number that will be displayed on the coformation page that will act as a order number!

window.onload = function() {

    function getRandomNumber(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    var randomNumber = getRandomNumber(11111,99999 );
    document.getElementById('random-number').innerHTML = "ORDER #: " + randomNumber;
};