console.log("Script Carregado")

function CalcularAnos() {
    console.log("Botão de Calcular")
    let popAinput = document.getElementById("popA").value.trim()
    let taxaAinput = document.getElementById("taxaA").value.trim()
    let popBinput = document.getElementById("popB").value.trim()
    let taxaBinput = document.getElementById("taxaB").value.trim()

    if (popAinput === "" || taxaAinput === "" || popBinput === "" || taxaBinput === "") {
        alert("Por favor, preencha todos os campos")
        return
    }

    let popA = parseInt(popAinput)
    let taxaA = parseInt(taxaAinput) / 100
    let popB = parseInt(popBinput)
    let taxaB = parseInt(taxaBinput) / 100
    let anos = 0

    while (popA < popB) {
        popA *= (1 + taxaA)
        popB *= (1 + taxaB)
        anos++
    }

    console.log("Anos Calculados", anos)
    let resultado = document.getElementById("resultado")
    resultado.innerHTML = `Serão necessários ${anos} anos para que a população do país A ultrapasse ou iguale a população do país B.`
}

function LimparCampos() {
    console.log("Botão de Limpar Campos")
    document.getElementById("popA").value = ""
    document.getElementById("taxaA").value = ""
    document.getElementById("popB").value = ""
    document.getElementById("taxaB").value = ""
    let resultado = document.getElementById("resultado")
    resultado.innerHTML = ""
}
/*innerHTML pode ser usado para receber o conteúdo de um elemento 
HTML ou para definir um novo conteúdo para ele. Para isso, 
podemos utilizar a sintaxe do DOM (document. getElement) para 
realizar essas ações através do JavaScript.*/