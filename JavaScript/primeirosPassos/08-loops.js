console.log(`\nTrabalhando com condicionais`);

const listaDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`
);

const idadeComprador = 17;
const estaAcompanhada = false;
let temPassagemComprada = false;
const destino = "Curitiba";

console.log("\n Destinos possíveis: ");
console.log(listaDeDestinos);

const podeComprar = idadeComprador >= 18 || estaAcompanhada == true;

let contador = 0;
let destinoExiste = false;

while (contador < 3) {
    
    if(listaDeDestinos[contador] == destino) {
        destinoExiste = true;
        break;
    }
    contador += 1;
}

console.log("Destino existe: " + destinoExiste);

if (podeComprar && destinoExiste) {
    console.log("Boa viagem");
} else {
    console.log("Desculpe tivemos um erro!")
}

for(let i = 0 ; i < 3 ; i++) {
    
    if(listaDeDestinos[i] == destino) {
        destinoExiste = true;
    }
}

// O que aprendemos nessa aula:

// While;

// Break;

// Usando o Debbuger do VS Cde;

// Entendendo o fluxo de execução do código;

// configurando o debbuger do VSCode;

// For Loop;