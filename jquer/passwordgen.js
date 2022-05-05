//Dom ele 
// https://codepen.io/FlorinPop17/pen/BaBePej
const reslutEl = document.getElementById('result');
const lengthEl = document.getElementById('length');
const upperEl = document.getElementById('uppercase');
const lowerEl = document.getElementById('lowercase');
const numnerEl = document.getElementById('numbers');
const symboEl = document.getElementById('symbols');
const generateEl = document.getElementById('generate');
const clipboardEl = document.getElementById('clipboard');

const randFunc = {
    lower: generateRandLow,
    upper: generateRandUpp,
    number: generateRandNum,
    symbol: generateRandSym
};
//generate event lisnter
generateEl.addEventListener('click', (e) => {
    const length = +lengthEl.value;
    const hasLower = +lowerEl.checked;
    const hasUpper = +upperEl.checked;
    const hasNumber = +numnerEl.checked;
    const hasSymbol = +symboEl.checked;

    console.log(hasLower + hasNumber + hasUpper + hasSymbol);
    reslutEl.innerText = generatePassKey(hasUpper, hasLower, hasNumber, hasSymbol, length);
});


// Generate pwd
function generatePassKey(upper, lower, number, symbol, length) {
    // initiate var
    // filter out 
    //loop over length call func for each type
    // add final pwd and store in val and return.

    let genePwd = '';
    const typesCount = lower + upper + number + symbol + length;
    console.log("land : " + typesCount);
    const typesArr = [{ upper }, { lower }, { number }, { symbol }].filter(item => Object.values(item)[0]);
    console.log("typesArr : " + typesArr);

    if (typesCount === 0) {

        return '';
        alert('kuch toh check kar');

    }
    for (let i = 0; i < length; i += length) {
        // console.log('entering loop');
        typesArr.forEach(type => {
            const funcName = Object.keys(type)[0];
            genePwd += randFunc[funcName]();
            console.log('FuncName:' + funcName);
        });
    }
    console.log('genpass:' + genePwd.slice(0, length) + "Genepass: " + genePwd);
}

//generator functions
function generateRandLow() {

    return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
    // console.log(Math.floor(Math.random() * 26) + 97);◘
}

function generateRandUpp() {

    return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
    // console.log(Math.floor(Math.random() * 26) + 97);◘
}

function generateRandNum() {

    return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
    // console.log(Math.floor(Math.random() * 26) + 97);◘
}

function generateRandSym() {
    const symbiote = '!@#$%^&*(){}[]<>#*/=';
    // return String.fromCharCode(Math.floor(Math.random() * 10) + 48);

    return symbiote[Math.floor(Math.random() * symbiote.length)];

}

// console.log(generateRandLow());
// console.log(generateRandUpp());
// console.log(generateRandNum());