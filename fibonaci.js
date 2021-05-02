
function SeriesFibonacci(n) {
    
    if (n == 0){return 0}
    if (n == 1){return 1}
    return SeriesFibonacci(n-1) + SeriesFibonacci(n-2)}

const terminal = require('readline');

const Console = terminal.createInterface({
    input: process.stdin,
    output: process.stdout
});

function numero(num){
    if(num >= 0){
        return num
    }
    else{
        //console.log("el numero no puede ser una letra o negativo se cambiara a 0")
        return 0
    }

}
Console.question("\nEnter a number ", (number) => {

    console.log("F( "+numero(number)+" ) = " + SeriesFibonacci(numero(number)))
    Console.close();
    });