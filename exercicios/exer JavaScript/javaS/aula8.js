function Pessoa(nome, idade, corPreferida) {
    this.nome = nome;
    this.idade = idade;
    this.corPreferida = corPreferida;
  }
  
  const registros = []; // Array para armazenar os registros de pessoas
  
  function adicionarRegistro() {
    const nome = prompt("Digite o nome da pessoa:");
    const idade = parseInt(prompt("Digite a idade da pessoa:"));
    const corPreferida = prompt("Digite a cor preferida da pessoa:");
  
    const pessoa = new Pessoa(nome, idade, corPreferida);
    registros.push(pessoa);
  
    const continuar = confirm("Deseja adicionar outro registro?");
    if (continuar) {
      adicionarRegistro();
    } else {
        //chamada das funções de comparação
      compararIdades();
      compararCores();
    }
  }
  
  function compararIdades() {
    if (registros.length === 0) {
      console.log("Nenhum registro disponível para comparação.");
      return;
    }
  
    let pessoaMaisVelha = registros[0];
  
    for (let i = 1; i < registros.length; i++) {
      if (registros[i].idade > pessoaMaisVelha.idade) {
        pessoaMaisVelha = registros[i];
      }
    }
  
    console.log(`A pessoa mais velha é ${pessoaMaisVelha.nome}, com ${pessoaMaisVelha.idade} anos.`);
  }
  
  function compararCores() {
    // Implemente a lógica de comparação de cores aqui
  }
  
  // Inicia o processo de adicionar registros
  adicionarRegistro();
  