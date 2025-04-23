let numeroInicial = parseInt(prompt("Insira o número inicial: "));
let numeroFinal = parseInt(prompt("Insira o número final: "));
let numeroCorretoFinal;

if (isNaN(numeroInicial) || isNaN(numeroFinal) || (numeroInicial == numeroFinal)) {
    alert(`Você inseriu alguma informação incorreta ou os números são iguais,tente novamente`);
} else {

    if(numeroInicial > numeroFinal){
        numeroCorretoFinal = numeroInicial; 
        numeroInicial = numeroFinal;    
    } else {
        numeroCorretoFinal = numeroFinal;
    }
    
    while (numeroInicial <= numeroCorretoFinal) {

        if (numeroInicial % 2 == 0) {
            console.log(` ${numeroInicial}`)
        }
        numeroInicial++;
    }
}