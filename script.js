function calcularIMC(peso, altura) {
    return peso / (altura * altura);
}

function exibirResultado(imc) {
    let classificacao = '';

    if (imc < 18.5) {
        classificacao = 'Abaixo do peso';
    } else if (imc >= 18.5 && imc <= 24.9) {
        classificacao = 'Peso normal';
    } else if (imc >= 25 && imc <= 29.9) {
        classificacao = 'Sobrepeso';
    } else if (imc >= 30 && imc <= 34.9) {
        classificacao = 'Obesidade Grau I';
    } else if (imc >= 35 && imc <= 39.9) {
        classificacao = 'Obesidade Grau II';
    } else {
        classificacao = 'Obesidade Mórbida (Grau III)';
    }

    document.getElementById('imc-value').textContent = `IMC: ${imc.toFixed(2)}`;
    document.getElementById('classificacao').textContent = `Classificação: ${classificacao}`;
    document.getElementById('resultado').style.display = 'block';
}

document.getElementById('imc-form').addEventListener('submit', function (event) {
    event.preventDefault();

    const peso = parseFloat(document.getElementById('peso').value);
    const altura = parseFloat(document.getElementById('altura').value);

    if (isNaN(peso) || isNaN(altura) || peso <= 0 || altura <= 0) {
        alert('Por favor, insira valores válidos para peso e altura.');
        return;
    }

    const imc = calcularIMC(peso, altura);

    exibirResultado(imc);
});