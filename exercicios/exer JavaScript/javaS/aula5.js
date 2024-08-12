const nome1 = prompt("Digite o nome da primeira pessoa:");
const nome2 = prompt("Digite o nome da segunda pessoa:");

const idade1 = parseInt(prompt(`Digite a idade de ${nome1}:`));
const idade2 = parseInt(prompt(`Digite a idade de ${nome2}:`));

//Compara as idades
if (idade1 > idade2) {
  console.log(`${nome1} é mais velho(a) que ${nome2}.`);
} else if (idade2 > idade1) {
  console.log(`${nome2} é mais velho(a) que ${nome1}.`);
} else {
  console.log(`${nome1} e ${nome2} têm a mesma idade.`);
}

//cor preferida de cada pessoa
const cor1 = prompt(`Digite a cor preferida de ${nome1}:`);
const cor2 = prompt(`Digite a cor preferida de ${nome2}:`);

//Compara as cores e exibe mensagens
if (cor1 === cor2) {
  console.log(`A cor preferida de ${nome1} é a mesma de ${nome2}: ${cor1}.`);
} else {
  console.log(`As cores preferidas de ${nome1} e ${nome2} são diferentes.`);
}

const cidade1 = parseInt(prompt(`Digite a cidade de ${nome1}:`));
const cidade2 = parseInt(prompt(`Digite a cidade de ${nome2}:`));

if (cidade1 === cidade2) {
    console.log(`A cidade de ${nome1} é a mesma de ${nome2}: ${cor1}.`);
  } else {
    console.log(`As cidade de ${nome1} e ${nome2} são diferentes.`);
  }
