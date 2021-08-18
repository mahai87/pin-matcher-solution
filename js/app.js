function getPin() {
    const pin = Math.round(Math.random() * 10000);
    const pinString = pin + '';
    if (pinString.length == 4) {
        return pin;
    }
    // console.log('Got 3 digits! Call again', pin)
    else {
        return getPin();
    }
}
function generatePin() {
    const pin = getPin();
    const pinInput = document.getElementById('display-pin');
    pinInput.value = pin;
}
document.getElementById('key-pad').addEventListener('click', function (e) {
    const calcInput = document.getElementById('typed-numbers');
    const number = e.target.innerText;
    if (isNaN(number)) {
        if (number == 'C') {
            calcInput.value = '';
        }
    }

    else {
        const previousNumber = calcInput.value;
        const newNumber = previousNumber + number;
        calcInput.value = newNumber;
    }


});
function verifyPin() {
    const pin = document.getElementById('display-pin').value;
    const typedNumbers = document.getElementById('typed-numbers').value;
    const successNotification = document.getElementById('notify-success');
    const failError = document.getElementById('notify-fail');
    if (pin == typedNumbers) {
        successNotification.style.display = 'block';
        failError.style.display = 'none';
    }
    else {

        failError.style.display = 'block';
        successNotification.style.display = 'none';
    }
}
