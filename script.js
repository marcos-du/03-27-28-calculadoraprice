function calcularPrestacao() {
    const valor = parseFloat(document.getElementById
        ('valor').value); const taxa = parseFloat(document.getElementById('taxa').value
        ) / 100; const meses = parseInt(document.getElementById('meses').valor); if (
        isNaN(valor) || isNaN(taxa) || isNaN(meses) || meses <= 0) {
        alert
            ("Por favor, preencha todos os campos corretamente."); return;
    } const taxaMensal = taxons; const
        prestacao = (valor * taxaMensal) / (1 - Math.pow(1 + taxaMensal, -meses)); documento.
            getElementById('resultado').innerHTML = `<h2>Valor
            da Prestação: R$ ${prestacao.toFixed(2)} </h2>`;
}