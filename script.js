
function calculaIMC() {
    
    let altura = document.getElementById("altura")
    let peso = document.getElementById("peso");
    var calculoIMC = peso.valueAsNumber / Math.pow(altura.valueAsNumber, 2);
    let resultado = document.getElementById("resultado");

    if (calculoIMC < 18.5) {
        resultado.textContent = `Seu IMC é de ${calculoIMC.toFixed(2)}. Você está abaixo do peso.`;

    } else if (calculoIMC >= 18.5 && calculoIMC < 24.9) {
        resultado.textContent = `Seu IMC é de ${calculoIMC.toFixed(2)}. Você está com o peso normal.`;

    } else if (calculoIMC >= 25 && calculoIMC < 29.9) {
        resultado.textContent = `Seu IMC é de ${calculoIMC.toFixed(2)}. Você está com sobrepeso.`;

    } else if (calculoIMC >= 30 && calculoIMC < 39.9) {
        resultado.textContent = `Seu IMC é de ${calculoIMC.toFixed(2)}. Você está obeso.`;

    } else if (calculoIMC < 40)  {
        resultado.textContent = `Seu IMC é de ${calculoIMC.toFixed(2)}. Você está com obesidade grave.`;
    } else {
        resultado.textContent = 'Por favor, preencha os campos com números válidos.';
    }

    adicionarCalculoIMC(altura.valueAsNumber, peso.valueAsNumber, calculoIMC);
    exibirUltimosCalculos();
}


function limpar() {
    document.getElementById('altura').value = '';
    document.getElementById('peso').value = '';
    resultado.textContent = '';
}

function getUltimosCalculos() {
    var calculos = localStorage.getItem('ultimosCalculos');
    return calculos ? JSON.parse(calculos) : [];
}

function adicionarCalculoIMC(altura, peso, imc) {
    var calculos = getUltimosCalculos();

    calculos.unshift({ altura, peso, imc });

    if (calculos.length > 5) {
        calculos.pop();
    }

    localStorage.setItem('ultimosCalculos', JSON.stringify(calculos));

}

function exibirUltimosCalculos() {
    var calculos = getUltimosCalculos();

    var listaCalculos = document.getElementById('listaCalculos');
    listaCalculos.innerHTML = '';

    for (var i = 0; i < calculos.length; i++) {
        var calculo = calculos[i];
        var resultado = document.createElement('li');
        resultado.textContent = `Altura: ${calculo.altura}, Peso: ${calculo.peso}, IMC: ${calculo}`;
    }

}
