function calcular(){
    const preco = parseFloat(document.getElementById('preco').value);
    const taxaPorcentagem = parseFloat(document.getElementById('taxa').value);
    const desconto = parseFloat(document.getElementById('final').value) || 0;

    const promocao = preco - desconto;
    const valorTaxa = promocao * (taxaPorcentagem/100);
    const lucroBruto = (preco - desconto) - valorTaxa;

    const lucroArrendondado = Math.ceil(lucroBruto);
    
    document.getElementById('out-lucro').innerText = "R$" + lucroArrendondado.toFixed(2);
    document.getElementById('out-taxa').innerText = "R$" + valorTaxa.toFixed(2);
    document.getElementById('resultado').classList.remove('hidden');

    if (lucroArrendondado < 50){
        document.getElementById('out-lucro').style.color = "red";
    }else{
        document.getElementById('out-lucro').style.color = "green";
    }
}
