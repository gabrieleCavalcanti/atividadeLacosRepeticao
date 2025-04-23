let numeroAleatorio = Math.floor(Math.random() * 10);
let numeroTentativa = 1;
let numeroUsuario;

do {
    numeroUsuario = parseInt(prompt(`Insira um número:  `)); 

    if (isNaN(numeroUsuario)) {
        alert(`Você inseriu alguma informação incorreta ou os números são iguais,tente novamente`);
    } else {    

        if (numeroUsuario == numeroAleatorio) {
            console.log(` Número correto!!`);
        } else if (numeroUsuario > numeroAleatorio) {
            console.log(`O Número é menor`);
        } else {
            console.log(`O Número é maior`);
        }
        numeroTentativa++;
    }
    
} while (numeroUsuario != numeroAleatorio && numeroTentativa <= 3);

console.log(`O número sortiado era o : ${numeroAleatorio}`);




