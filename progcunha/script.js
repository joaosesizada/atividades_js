document.getElementById('form').addEventListener('submit', function (event) {
    event.preventDefault();

    let numerosMaioresOuIguais6 = [];
    let numerosMenores6 = [];

    for (let i = 1; i <= 7; i++) {
        let numero = parseFloat(document.getElementById(`numero${i}`).value);
        
        if (numero >= 0 && numero <= 10) {
            if (numero >= 6) {
                numerosMaioresOuIguais6.push(numero);
            } else {
                numerosMenores6.push(numero);
            }
        } else {
            alert("Número fora do intervalo permitido. Não será considerado.");
        }
    }

    let mediaMaioresOuIguais6 = numerosMaioresOuIguais6.length > 0 ? 
        (numerosMaioresOuIguais6.reduce((a, b) => a + b, 0) / numerosMaioresOuIguais6.length) : 0;

    let mediaMenores6 = numerosMenores6.length > 0 ? 
        (numerosMenores6.reduce((a, b) => a + b, 0) / numerosMenores6.length) : 0;

    document.getElementById('media-maiores').textContent = `Média dos números maiores ou iguais a 6: ${mediaMaioresOuIguais6}`;
    document.getElementById('media-menores').textContent = `Média dos números menores que 6: ${mediaMenores6}`;
});

document.getElementById('form').addEventListener('submit', function (event) {
    event.preventDefault();

    const nome = document.getElementById('nome').value;
    const idade = parseInt(document.getElementById('idade').value);
    let mensagem = '';

    if (idade >= 18) {
        mensagem = `${nome}, você pode votar na eleição.`;
    } else {
        mensagem = `${nome}, você não pode votar na eleição.`;
    }

    document.getElementById('resultado').textContent = mensagem;
});

const produtos = document.querySelectorAll('.qtn_produto')
    produtos.forEach(function(produtos){
        produtos.addEventListener('input', function(){
            let aipim = document.getElementById('aipim').value
            let batata = document.getElementById('batata').value
            let cebola = document.getElementById('cebola').value
            let cenoura = document.getElementById('cenoura').value
            let chuchu = document.getElementById('chuchu').value
            let tomate = document.getElementById('tomate').value
            let total = (aipim * 2.87) +(batata * 4.43) + (cebola * 3.32) + (cenoura * 3.59) + (chuchu * 1.79) + (tomate * 5.35)
            const valorFinal = document.getElementById("valorFinal")
            valorFinal.innerHTML = `Valor Total:R$${total.toFixed(2)}`
        })  
    }) 

    function calcular() {
        let num1 = parseFloat(document.getElementById('num1').value);
        let num2 = parseFloat(document.getElementById('num2').value);
        let operation = document.getElementById('operation').value.toUpperCase();
        let resultado;
        let operacaoRealizada;

        switch (operation) {
            case 'A':
                resultado = num1 + num2;
                operacaoRealizada = 'Adição';
                break;
            case 'S':
                resultado = num1 - num2;
                operacaoRealizada = 'Subtração';
                break;
            case 'M':
                resultado = num1 * num2;
                operacaoRealizada = 'Multiplicação';
                break;
            case 'D':
                if (num2 !== 0) {
                    resultado = num1 / num2;
                    operacaoRealizada = 'Divisão';
                } else {
                    resultado = 'Erro: Divisão por zero';
                }
                break;
            default:
                resultado = 'Operação inválida';
                operacaoRealizada = 'Nenhuma';
        }

        document.getElementById('resultado').innerHTML = 
            `Números: ${num1} e ${num2} <br> 
            Operação: ${operacaoRealizada} <br> 
            Resultado: ${resultado}`;
    }

function encontrarMaiorMenor() {
    let num1 = parseInt(document.getElementById('num1').value);
    let num2 = parseInt(document.getElementById('num2').value);
    let num3 = parseInt(document.getElementById('num3').value);
    
    let maior, menor;

    if (num1 > num2 && num1 > num3) {
        maior = num1;
    } else if (num2 > num1 && num2 > num3) {
        maior = num2;
    } else {
        maior = num3;
    }

    if (num1 < num2 && num1 < num3) {
        menor = num1;
    } else if (num2 < num1 && num2 < num3) {
        menor = num2;
    } else {
        menor = num3;
    }

    document.getElementById('resultado').innerHTML = 
        `Maior valor: ${maior} <br> Menor valor: ${menor}`;
}

function calcularPrecoFinal() {
    let custoFabrica = parseFloat(document.getElementById('custoFabrica').value);
    let percentualDistribuidor = parseFloat(document.getElementById('percentualDistribuidor').value);
    
    const impostos = 15 / 100; // 15% de impostos
    let custoImpostos = custoFabrica * impostos;
    let custoDistribuidor = custoFabrica * (percentualDistribuidor / 100);
    
    let precoFinal = custoFabrica + custoImpostos + custoDistribuidor;
    
    document.getElementById('resultado').innerHTML = 
        `Preço Final ao Consumidor: R$ ${precoFinal.toFixed(2)}`;
}

function calcularPrecoVenda() {
    let valorAquisicao = parseFloat(document.getElementById('valorAquisicao').value);
    let valorVenda;

    if (valorAquisicao < 50) {
        valorVenda = valorAquisicao * 1.35;
    } else if (valorAquisicao >= 50 && valorAquisicao < 100) {
        valorVenda = valorAquisicao * 1.25;
    } else {
        valorVenda = valorAquisicao * 1.15;
    }

    document.getElementById('resultado').innerHTML = 
        `Valor de Venda: R$ ${valorVenda.toFixed(2)}`;
}
function calcularCusto() {
    const custoBasico = 5.00;
    const custoAdicional1 = 0.05;
    const custoAdicional2 = 0.10;
    const limiteBasico = 75;
    const limiteIntermediario = 240;

    let numMensagens = parseInt(document.getElementById('numMensagens').value);
    let custoTotal = custoBasico;

    if (numMensagens > limiteBasico) {
        if (numMensagens <= limiteIntermediario) {
            custoTotal += (numMensagens - limiteBasico) * custoAdicional1;
        } else {
            custoTotal += (limiteIntermediario - limiteBasico) * custoAdicional1;
            custoTotal += (numMensagens - limiteIntermediario) * custoAdicional2;
        }
    }

    document.getElementById('resultado').innerHTML = 
        `Custo Total: R$ ${custoTotal.toFixed(2)}`;
}

function calcularSalario() {
    const salarioFixo = 1800.00;
    let totalVendas = parseFloat(document.getElementById('totalVendas').value);
    let comissao;

    if (totalVendas <= 10000) {
        comissao = totalVendas * 0.03;
    } else if (totalVendas <= 30000) {
        comissao = totalVendas * 0.05;
    } else {
        comissao = totalVendas * 0.08;
    }

    let salarioTotal = salarioFixo + comissao;

    document.getElementById('resultado').innerHTML = 
        `Salário Total: R$ ${salarioTotal.toFixed(2)}`;
}
function calcularPreco() {
    const precoGasolina = 5.00; // Preço por litro de Gasolina
    const precoAlcool = 3.80; // Preço por litro de Álcool
    
    let tipoCombustivel = document.getElementById('tipoCombustivel').value.toUpperCase();
    let quantidadeLitros = parseFloat(document.getElementById('quantidadeLitros').value);
    let precoFinal;

    if (tipoCombustivel === 'G') {
        if (quantidadeLitros <= 20) {
            precoFinal = quantidadeLitros * precoGasolina * 0.97; // Desconto de 3%
        } else {
            precoFinal = quantidadeLitros * precoGasolina * 0.95; // Desconto de 5%
        }
    } else if (tipoCombustivel === 'A') {
        if (quantidadeLitros <= 20) {
            precoFinal = quantidadeLitros * precoAlcool * 0.98; // Desconto de 2%
        } else {
            precoFinal = quantidadeLitros * precoAlcool * 0.96; // Desconto de 4%
        }
    } else {
        document.getElementById('resultado').innerHTML = 
            'Tipo de combustível inválido. Use G para Gasolina ou A para Álcool.';
        return;
    }

    document.getElementById('resultado').innerHTML = 
        `Quantidade de Litros: ${quantidadeLitros} <br> 
        Tipo de Combustível: ${tipoCombustivel === 'G' ? 'Gasolina' : 'Álcool'} <br> 
        Preço Final: R$ ${precoFinal.toFixed(2)}`;
}