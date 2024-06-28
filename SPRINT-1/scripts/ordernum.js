
// creating a random number that will be displayed on the coformation page that will act as a order number!

window.onload = function() {

    function getRandomNumber(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    var randomNumber = getRandomNumber(21635,53725 );
    document.getElementById('random-number').innerHTML = "ORDER #: " + randomNumber;
};