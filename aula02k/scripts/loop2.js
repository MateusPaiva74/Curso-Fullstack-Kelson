const numeros = Array.from({ length:100 }, (_, index) => index + 1);

var FizzBuzz = 0;
var Fizz = 0;
var Buzz = 0;

numeros.map(numero => {
    if ( numero % 3 === 0 && numero % 5 === 0) {
        console.log(numero + ' FizzBuzz');
        FizzBuzz++;
    }
    else if (numero %3 === 0) {
        console.log(numero + ' Fizz');
        Fizz++;
    }
    else if (numero %5 ===0) {
        console.log(numero + ' Buzz');
        Buzz
    }
    else{
        console.log(numero);
    }
});

console.log(`quantidade de Fizz ${Fizz} \n quantidade de buzz ${Buzz} \n quantidade de fizzbuzz ${FizzBuzz}`);