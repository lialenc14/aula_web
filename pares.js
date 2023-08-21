//Programa que soma todos os pares de 1 a 100
let pares = [];
let soma = 0;
for (let i = 0; i <= 100; i++) {
    if (i % 2 == 0) {
        pares.push(i);
        soma += pares[i];
    }
}
console.log("A soma dos números pares de 1 a 100 é;", soma);
//Provavelmente o erro seja no array vazio