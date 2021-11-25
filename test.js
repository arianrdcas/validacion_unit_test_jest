// importar la función sum del archivo app.js
const { sum } = require('./app.js');

// comienza tu primera prueba
test('adds 14 + 9 to equal 23', () => {
    //dentro de la prueba llamamos a nuestra función sum con 2 números
    let total = sum(14, 9);

    // esperamos que la suma de esos 2 números sea 23
    expect(total).toBe(23);
});

test("One euro should be 1.206 dollars", function(){
    // importo la funcion desde app.js
    const { fromEuroToDollar } = require('./app.js')
    
    // hago mi comparacion (la prueba)
    expect(fromEuroToDollar(5)).toBe(6); //1 euro son 1.2 dolares, entonces 5 euros deberian ser = (5 * 1.2)
})

test("One dollar should be 106.5 yen", function(){
    // importo la funcion desde app.js
    const { fromDollarToYen } = require('./app.js')
    
    // hago mi comparacion (la prueba)
    expect(fromDollarToYen(6)).toBe(639); //1 dollar son 106.5 yen, entonces 6 dollar deberian ser = (6 * 106.5)
})

test("One yen should be 0,006 pound", function(){
    // importo la funcion desde app.js
    const { fromYenToPound } = require('./app.js')
    
    // hago mi comparacion (la prueba)
    expect(fromYenToPound(639.5)).toBe(4); //1 yen son 0.006 pound, entonces 639.5 yen deberian ser = (639.5 * 0.006)
})