console.log(`Trabalhando com listas`);
// const salvador = `Salvador`;
// const saoPaulo = `São Paulo`;
// const rioDeJaneiro = `Rio de Janeiro`;

// Atalhos = crtl + k + c (coloca comentários)
// Atalhos = crtl + k + u (retira cometários)

const listaDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`
);

listaDeDestinos.push(`Curitiba`); // adicionando um item a minha lista
console.log ("Destinos possíveis: " );
//console.log (salvador, saoPaulo, rioDeJaneiro);
console.log ( listaDeDestinos);

listaDeDestinos.splice(1,1); // deletar a segunda posição e apenas um elemento
console.log(listaDeDestinos);
console.log(listaDeDestinos[1], listaDeDestinos[0]);