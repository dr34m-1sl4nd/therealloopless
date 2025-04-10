const number = document.getElementById("noLoop");
number.addEventListener(`input`, handleInput);

function handleInput(e) {
    let value = e.target.value;
    document.getElementById("result").innerHTML = "";
    noLoop(value, 1);
}

function noLoop(target, currentNumber) {
    
    if (currentNumber <= target) {
        document.getElementById("result").textContent += ` ${currentNumber}`;
        return noLoop(target, currentNumber + 1);
    }
}