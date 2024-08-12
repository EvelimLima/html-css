let registros = [];

function exibirTabela() {
    const nome = document.getElementById('nome').value;
    const idade = document.getElementById('idade').value;
    const nacionalidade = document.getElementById('nacionalidade').value;
    const cidade = document.getElementById('cidade').value;
    const escolaridade = document.getElementById('escolaridade').value;

    const pessoa = { nome, idade, nacionalidade, cidade, escolaridade };
    registros.push(pessoa);

    const tabela = document.getElementById('tabela');
    tabela.style.display = 'block';

    const newRow = tabela.insertRow();
    newRow.insertCell().textContent = nome;
    newRow.insertCell().textContent = idade;
    newRow.insertCell().textContent = nacionalidade;
    newRow.insertCell().textContent = cidade;
    newRow.insertCell().textContent = escolaridade;

    //Limpar os campos do formulário após a inserção na tabela
    document.getElementById('myForm').reset();

    //Se há dois registros, realizar a comparação
    if (registros.length === 2) {
        compararPessoas();
    }
}

function compararPessoas() {
    const [pessoa1, pessoa2] = registros;

    let comparacao = `<strong>Comparação entre ${pessoa1.nome} e ${pessoa2.nome}:</strong><br>`;

    comparacao += `Idade: ${pessoa1.idade} vs ${pessoa2.idade} - ${pessoa1.idade > pessoa2.idade ? pessoa1.nome : pessoa2.nome} é mais velho(a).<br>`;
    comparacao += `Nacionalidade: ${pessoa1.nacionalidade} vs ${pessoa2.nacionalidade} - ${pessoa1.nacionalidade === pessoa2.nacionalidade ? "Mesma nacionalidade" : "Nacionalidades diferentes"}.<br>`;
    comparacao += `Cidade: ${pessoa1.cidade} vs ${pessoa2.cidade} - ${pessoa1.cidade === pessoa2.cidade ? "Mesma cidade" : "Cidades diferentes"}.<br>`;
    comparacao += `Escolaridade: ${pessoa1.escolaridade} vs ${pessoa2.escolaridade} - ${pessoa1.escolaridade === pessoa2.escolaridade ? "Mesma escolaridade" : "Escolaridades diferentes"}.<br>`;

    const resultadoDiv = document.getElementById('resultadoComparacao');
    resultadoDiv.innerHTML = comparacao;
    resultadoDiv.style.display = 'block';
}
