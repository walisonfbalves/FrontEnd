console.log(`Trabalhando com condicionais`);

const listaDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`
);

const idadeComprador = 20;
const estaAcompanhada = true;

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

console.log(listaDeDestinos);

// console.log(idadeComprador > 18);
// console.log(idadeComprador < 18);
// console.log(idadeComprador <= 18);
// console.log(idadeComprador >=18);
// console.log(idadeComprador == 18);


if ( idadeComprador >= 18 || estaAcompanhada == true ) {
    console.log('Comprador maior de idade')
    listaDeDestinos.splice(2, 1); // removendo item
}else{
    console.log("Não é maior de idade e não posso vender");
}
