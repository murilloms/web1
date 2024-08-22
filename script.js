console.log("Script Carregado")

function CalcularTemperatura() {
    const tempInput = document.getElementById('temp').value;
    const resultDiv = document.getElementById('resultado');
    const conversionType = document.querySelector('input[name="conversionType"]:checked');

    if (!conversionType) {
        resultDiv.textContent = 'Selecione um tipo de conversão.';
        return;
    }

    const tempValue = parseFloat(tempInput);
    if (isNaN(tempValue)) {
        resultDiv.textContent = 'Digite um valor válido.';
        return;
    }

    let result;
    if (conversionType.value === 'celsiusToFahrenheit') {
        result = (tempValue * 9 / 5) + 32;
        resultDiv.textContent = `${tempValue}° Celsius é igual a ${result.toFixed(2)}° Fahrenheit.`;
    } else if (conversionType.value === 'fahrenheitToCelsius') {
        result = (tempValue - 32) * 5 / 9;
        resultDiv.textContent = `${tempValue}° Fahrenheit é igual a ${result.toFixed(2)}° Celsius.`;
    }
}

function LimparCampos() {
    document.getElementById('formTemperatura').reset();
    document.getElementById('resultado').textContent = '';
}