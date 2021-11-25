
// declaramos una funcion con el mismo nombre "formEuroToDollar"
const fromEuroToDollar = function(valueInEuro){
    // convertimos el valor a dolares
    let valueInDollar = valueInEuro * 1.2;
    // retornamos el valor
    let rvalueInDollar = parseFloat(valueInDollar.toFixed(1));
    return rvalueInDollar;
}
console.log(fromEuroToDollar(5))


let dollar = fromEuroToDollar(5);

const fromDollarToYen = function(dollar){
    // convertimos el valor a yen
    let valueInYen = dollar * 127.9;
    // retornamos el valor
    let rvalueInYen =  parseFloat(valueInYen.toFixed(1));
    return rvalueInYen;
}

console.log(fromDollarToYen(dollar))

let yen = fromDollarToYen (dollar);

const fromYenToPound = function(yen){
    // convertimos el valor a yen
    let valueInPound = yen * 0.8;
    // retornamos el valor
    let rvalueInPound =  parseFloat(valueInPound.toFixed(1));
    return rvalueInPound;
}
console.log(fromYenToPound(5))


// exporta la función para usarla en otros archivos 
// (similar a la palabra clave `export` cuando se usa webpack)
module.exports = {fromEuroToDollar };
