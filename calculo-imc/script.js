
let altura = document.getElementById("altura")
let peso = document.getElementById("peso");
let resultado = document.getElementById("resultado");

function calculaIMC() {

    var calculoIMC = peso.valueAsNumber / Math.pow(altura.valueAsNumber, 2);

    if (calculoIMC < 18.5) {
        resultado.textContent = `Seu IMC é de ${calculoIMC.toFixed(2)}. Você está abaixo do peso.`;

    } else if (calculoIMC >= 18.5 && calculoIMC < 24.9) {
        resultado.textContent = `Seu IMC é de ${calculoIMC.toFixed(2)}. Você está com o peso normal.`;

    } else if (calculoIMC >= 25 && calculoIMC < 29.9) {
        resultado.textContent = `Seu IMC é de ${calculoIMC.toFixed(2)}. Você está com sobrepeso.`;

    } else if (calculoIMC >= 30 && calculoIMC < 39.9) {
        resultado.textContent = `Seu IMC é de ${calculoIMC.toFixed(2)}. Você está obeso.`;

    } else if (calculoIMC < 40) {
        resultado.textContent = `Seu IMC é de ${calculoIMC.toFixed(2)}. Você está com obesidade grave.`;
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

    var obj;

    let altura = document.getElementById("altura")
    let peso = document.getElementById("peso");
    let resultado = (peso.valueAsNumber / Math.pow(altura.valueAsNumber, 2));

    var div = document.getElementById('listaResultados');

    document.getElementById('btn-calcular').addEventListener('click', function() {
    
        obj = {
          altura: altura.value,
          peso: peso.value,
          imc: resultado
        };

        localStorage.setItem('dadosIMC', JSON.stringify(obj));

        div.textContent = `Altura: ${obj.altura}, Peso: ${obj.peso}, IMC ${obj.imc}`;
       
        var verDados = localStorage.getItem('dadosIMC');
    });

}

