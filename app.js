//generate code
function getCode() {
    const random = Math.random() * 10000;
    const code = (random + '').split('.')[0];
    if (code.length === 4) {
        return code;
    } else {
        return getCode();
    }
}
// display generated code
function generateCode() {
    const codeInput = document.getElementById('code');
    codeInput.value = getCode();
}

// handle buttons event
const buttonContainer = document.getElementById('digit-container');
buttonContainer.addEventListener('click', function(event) {
    const digit = event.target.innerText;
    if (isNaN(digit)) {
        // backspace
        // clear
        if (digit === 'C') {
            const typedInput = document.getElementById('typed-code');
            typedInput.value = '';
        }
    } else {
        const typedInput = document.getElementById('typed-code');
        typedInput.value = typedInput.value + digit;
    }
})

// verify typed pin 
function verifyPin() {
    const code = document.getElementById('code').value;
    const typedCode = document.getElementById('typed-code').value;
    if (code === typedCode) {
        // const correctCode = document.getElementById('right-code');
        // correctCode.style.display = 'block';

        // const WrongCode = document.getElementById('wrong-code');
        // WrongCode.style.display = 'none';
        displayMatchedResult('block', 'none');
    } else {
        // const WrongCode = document.getElementById('wrong-code');
        // WrongCode.style.display = 'block';

        // const correctCode = document.getElementById('right-code');
        // correctCode.style.display = 'none';
        displayMatchedResult('none', 'block');
    }
}

function displayMatchedResult(correctStatus, incorrectStatus) {
    const correctCode = document.getElementById('right-code');
    correctCode.style.display = correctStatus;

    const WrongCode = document.getElementById('wrong-code');
    WrongCode.style.display = incorrectStatus;
}