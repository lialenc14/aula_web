//objetos
/*console.log(objeto.nome);

//classes
class P {
    constructor(nome) {
        this.nome
    }
}*/

//DOM
//lidar com elementos html com javascript

//Promessas
//classe utilizada para requisições q n dependem do nosso lado, o retorno da requisição por padrão é promisse: em aguardo, resolvida, rejeitada, o cód segue adiante sem esperar a promessa ser resolvida
//se resoolvida faz algo, se rejeitada trata o erro e tenta novamente
const handleSubmit = () => {
const nome = document.getElementsByName("nome")[0];
const faltas = document.getElementsByName("faltas")[0];

const tbody = document.getElementsByTagName("tbody")[0];
tbody.appendChild(createTrWithGivenValues(nome.ariaValueMax, faltas.value));
nome.value = "";
faltas.value = "0";
}

const createTrWithGivenValues = (nome, faltas) => {
    const tr = document.createElement("tr");
    const nomeTd = document.createElement("td");
    const faltasTd = document.createElement("td");
    tr.appendChild(nomeTd);
    tr.appendChild(faltasTd);

    nomeTd.innerText = nome;
    faltasTd.innerText = faltas;

    return tr;
}
function setObjectLocalStorage(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
}

function getObjectLocalStorage(key){
    var value = localStorage.getItem(key);
    return value && JSON.parse(value);
}