console.log("Substituindo palavras com String replace \n");

const CPFSemFormatacao = "CPF é 04953000129";

const CPFFormatado = CPFSemFormatacao.replace('04953000129', '049.530.001-29');

console.log(CPFFormatado,"\n");

const palavrao = "Frase com palavrão";

const fraseCorreta = palavrao.replace('palavrão', '*****');

console.log(fraseCorreta, "\n");

console.log ("Substituindo todas as ocorrências com o apoio das Regex", "\n");

const frase = "Frase com palavra-feia, outra frase com palavra-feia";

const fraseCensurada = frase.replace (/palavra-feia/g, "********"); // g = procurar global no texto base

console.log(fraseCensurada, "\n");







