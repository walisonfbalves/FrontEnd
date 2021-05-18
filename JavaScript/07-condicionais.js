console.log(`Trabalhando com condicionais`);

const listaDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`
);

const idadeComprador = 20;
const estaAcompanhada = false;
const temPassagemComprada = true;

console.log("Destinos possíveis: ");
console.log(listaDeDestinos);

// if (idadeComprador >= 18) {
//     console.log('Comprador maior de idade')
//     listaDeDestinos.splice(1, 1); // removendo item
// } else if (estaAcompanhada == true) {
//     console.log('Comprador menor de idade, porem está acompanhada');
//     listaDeDestinos.splice(1, 1); // removendo item
// } else {
//     console.log("Não é maior de idade e não posso vender");
// }

// Atalho para organização = alt + shift + f

if ( idadeComprador >= 18 || estaAcompanhada == true ) {
    console.log('Obrigado pela preferência! Boa Viagem')
    listaDeDestinos.splice(2, 1); // removendo item
}else{
    console.log("Não é maior de idade e não posso vender");
}

console.log("Embarcando: \n") // \n pula uma linha
if ( idadeComprador > 18 && temPassagemComprada == true){
    console.log("Boa viagem")
} else {
    console.log("Você não pode embarcar");
}

console.log(listaDeDestinos);

// console.log(idadeComprador > 18);
// console.log(idadeComprador < 18);
// console.log(idadeComprador <= 18);
// console.log(idadeComprador >=18);
// console.log(idadeComprador == 18);


// O que aprendemos nessa aula:

// If e Else

// Operadores lógicos

// if encadeado

// else if

// && e ||