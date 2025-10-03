console.log("Hello world!");
/** 
 * @type {string}
 */
const hathet = "Hat-hét";
console.log(hathet);
//ezt a csillag type dolgot mindig a valtozo fole kell irni

/**
 * @type {string[]}
 */
const tomb = ["67", "MeinKampf", "Men in Black"]
console.log(tomb[0])

for(let i = 0; i < tomb.length; i++){
    console.log(tomb[1])
}

for(const a in tomb){
    console.log(a)
}

for(const key in tomb){
    console.log(`${key}:${tomb[key]}`)
}

/**
 * @type {{nev:string, age:number}}
 */
const a = {
    nev:`Csimpi`,
    age:17
}

console.log(a)
