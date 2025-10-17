const num = 7;
valami();

/**
 * @returns {void}
 */
function valami(){
    console.log("Helo")
}

/**
 * @returns {void}
 */
function valami2(){
    console.log(num)
}
valami2()

function valami3(){
    const b = 9; //csak ezen a scope-on latszik, mashonnan nem erheto el
    console.log(b)
}
valami3()

/**
 * @param {number} param1
 * @returns {number}
 */
function valami4(param1){
    const x = 6;
    const y = x + param1;
    return y;
}
const valtozo = valami4(2)
console.log(valtozo)

//void - undefined erteket vesz fel