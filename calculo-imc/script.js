
let altura = document.getElementById("altura");
let peso = document.getElementById("peso");
let resultado = document.getElementById("resultado")

function calculaIMC() {

    let calculoIMC = peso.valueAsNumber / Math.pow(altura.valueAsNumber, 2);

    if (calculoIMC < 18.5) {
        resultado.textContent = `Seu IMC é de ${calculoIMC.toFixed(2)}. Você está abaixo do peso.`;

    } else if (calculoIMC >= 18.5 && calculoIMC < 25) {
        resultado.textContent = `Seu IMC é de ${calculoIMC.toFixed(2)}. Você está com o peso normal.`;

    } else if (calculoIMC >= 25 && calculoIMC < 30) {
        resultado.textContent = `Seu IMC é de ${calculoIMC.toFixed(2)}. Você está acima do peso.`;

    } else if (calculoIMC >= 30 && calculoIMC < 40) {
        resultado.textContent = `Seu IMC é de ${calculoIMC.toFixed(2)}. Você está obeso.`;

    } else if (calculoIMC < 41) {
        resultado.textContent = `Seu IMC é de ${calculoIMC.toFixed(2)}. Você está com obesidade mórbida.`;
    } else {
        resultado.textContent = 'Número inválido';
    }

    salvar();
}


function limpar() {
    document.getElementById('altura').value = '';
    document.getElementById('peso').value = '';
    resultado.textContent = '';

}

function salvar() {

}

