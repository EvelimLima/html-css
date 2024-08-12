document.getElementById('confirmButton').addEventListener('click', function() {
    const nome = document.getElementById('nome').value;
    const idade = parseInt(document.getElementById('idade').value);

    const recomendacao = getRecomendacaoPorIdade(idade);
    exibirSugestaoFilmes(nome, recomendacao);
});

function getRecomendacaoPorIdade(idade) {
    if (idade <= 10) {
        return "Animações, Filmes infantis";
    } else if (idade <= 13) {
        return "Filmes de aventura, Comédias familiares";
    } else if (idade <= 18) {
        return "Comédias, Filmes de ação, Filmes adolescentes";
    } else {
        return "Drama, Suspense, Filmes de ação, Filmes de terror";
    }
}

function exibirSugestaoFilmes(nome, recomendacao) {
    const sugestaoDiv = document.getElementById('sugestaoFilmes');
    sugestaoDiv.innerHTML = `<strong>${nome}</strong>, com base na sua idade, recomendamos: <br><em>${recomendacao}</em>.`;
    sugestaoDiv.classList.remove('hidden');
}
