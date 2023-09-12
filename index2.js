/* let condicao1 = true;
if (condicao1){
    console.log('Entrei no if 1');
}

let condicao2 = false;
if (condicao2){
    console.log('Entrei no if 2');
} 


let num1 = prompt("Digite um número");
let num2 = prompt("Digite outro número");

function verificaIguais(a, b){
    if (a === b){
        console.log("Números iguais!");
    }
    else{
        console.log("Números diferentes!")
    }
}
    verificaIguais(num1, num2);


 function verificarNumerosIguais (c, d){
    if (c === d){
        return 'IGUAIS';
    }
    else{
        return 'DIFERENTES'
    }
}

console.log(verificarNumerosIguais(
    Number(prompt("Digite o primeiro numero")),
    Number(prompt("Digite o segundo número"))
));

let condicao = false;

if (condicao){
    console.log('Entrei no if');
}
else {
    console.log('Entrei no else');
}
  

let condicao1 = false;
let condicao2 = true;

if (condicao1){
    console.log('Entrei no if 1');
} else {
    if (condicao2){
        console.log('Entrei no if 2');
    }
}

//////////////////

let condicao3 = false;
let condicao4 = false;

if (condicao3) {
    console.log('Entrei no if1');
} else if (condicao4){
    console.log('Entrei no if2');
} else {
    console.log('Entrei no else');
}



function verificarNumerosIguais (c, d){
    if (c > d){
        return 'O PRIMEIRO É MAIOR QUE O SEGUNDO';
    }
    else if (c < d){
        return 'O PRIMEIRO É MENOR QUE O SEGUNDO'
    }
    else {
        return 'OS NÚMEROS SÃO IGUAIS'
    }
}

console.log(verificarNumerosIguais(
    Number(prompt("Digite o primeiro numero")),
    Number(prompt("Digite o segundo número"))
));
*/

let paisDeOrigem

if (paisDeOrigem === 'Brasil'){
    console.log('Brasileiro');
} else if (paisDeOrigem === 'EUA'){
    console.log('norte americano');
} else if (paisDeOrigem === 'Inglaterra'){
    console.log('inglês');
} else if (paisDeOrigem === 'França'){
    console.log('francês');
} else if (paisDeOrigem === 'Itália'){
    console.log('Italiano');
} else if (paisDeOrigem === 'Canadá'){
    console.log('canadense');
} else {
    console.log('nacionalidade não encontrada');
}


switch (paisDeOrigem) {
    case 'Brasil':
        console.log('Brasileiro');
        break
    case 'EUA':
        console.log('norte americano');
        break
    case 'Inglaterra':
        console.log('inglês');
        break
    default:
        console.log('nacionalidade não encontrada');
        break;
}

let pokemon = prompt("Escolha um pokemon: Bulbassauro, Charmander ou Squirtle");

function imprimirTipo (a){
    if (a === 'Bulbassauro'){
        console.log('Bulbassauro - Planta e veneno')
    }
    else if (a === 'Charmander'){
        console.log('Charmander - Fogo');
    }
    else {
        console.log('Squirtle: Água');
    }
}

imprimirTipo(pokemon);
