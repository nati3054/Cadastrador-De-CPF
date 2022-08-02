
const cpf = require('cpf')

var cpfDigitado = process.argv[2];
let lingua = process.argv[3];

console.log(`Tratado do cpf: ${cpfDigitado}`);


//console.log(cpf.isValid(cpfDigitado));

if (cpf.isValid(cpfDigitado)) {
    console.log(`CPF ${cpfDigitado} é valido`)
}else{
    console.log(`CPF ${cpfDigitado} não é invalido`)
}
