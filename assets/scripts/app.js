let currentResult = 0;

function getUserInput() {
    return parseFloat(userInput.value);
}

function logUserDescription(resultBeforeCalc, operator, calcNumber) {
    const calculationDescription = `${resultBeforeCalc} ${operator} ${calcNumber}`
    outputResult(currentResult, calculationDescription);
}

function add() {
    const enteredNumber = getUserInput();
    const initialResult = currentResult;
    currentResult = initialResult + enteredNumber;
    logUserDescription(initialResult, "+", enteredNumber);
}

function sub() {
    const enteredNumber = getUserInput();
    const initialResult = currentResult;
    currentResult = initialResult - enteredNumber;
    logUserDescription(initialResult, "-", enteredNumber);
}

function mul() {
    const enteredNumber = getUserInput();
    const initialResult = currentResult;
    currentResult = initialResult * enteredNumber;
    logUserDescription(initialResult, "*", enteredNumber);
}

function div() {
    const enteredNumber = getUserInput();
    const initialResult = currentResult;
    currentResult = initialResult / enteredNumber;
    logUserDescription(initialResult, "/", enteredNumber);
}

addBtn.addEventListener('click',add);

subtractBtn.addEventListener('click',sub);

multiplyBtn.addEventListener('click',mul);

divideBtn.addEventListener('click',div);