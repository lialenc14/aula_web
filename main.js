//Variáveis
let numero = 5;
let diaDaSemana = "quarta";
let diaDeHoje = `hoje é ${diaDaSemana}`;
//Número, texto, booleano 'true, false', listas (array) '[]', objeto (json) '{}'
//Não precisa declarar o tipo de variável, nem colocar aspas na chave do json

//Constante, sempre q estiver tudo em caixa alta, não muda o valor
const NOVA_FUNCAO_DISPONIVEL = true;

//Tratamento de erro
try {
    NOVA_FUNCAO_DISPONIVEL = false;
} catch (erro) {
    console.error("erro: " + erro.message);
}

//Função
function saudacao(nome) {
    return "Olá, " + nome + "!";
}

//Loop, no python len(lista) ele retorna o tamanho da lista a 1ª condição só roda na iniciação, dps só roda as outras duas, a última dps de executada volta pra 2ª pra verificar
for (let i = 0; i < array.length; i++) {
    console.log(array[1]);
}

//Array forEach
array.forEach(function(elemento) {
    console.log(elemento);
});

//Loop while
let contador = 0;
while (contador < 3) {
    console.log("Contador while: " + contador)
    contador++;
}