// consola

console.log("Codul a fost executat");
console.warn("Atentie!");
console.error("Nu ai voie sa faci asta");


//var   - global in {}
//let   - este decat local
//const - nu isi poate schimba valoarea

let ndName = "Mihai";
const age = 30;

/**  myName = "Stelian"
     ndName = "Tudor" */


{
    var myName = "Stelica";
}

console.log("Ma numesc", myName, ndName, "si am varsta de", age, "ani");

// primitive si obiecte
// Primitive
let boolean = false; // adevarat sau fals
let n = null;  // void 
let test = undefined; // undefined var
let num = 123; // number
let str = "testest"; // String text

console.log(typeof(boolean));

//Obiect
let Detaliim = {
    Vechime: 1,
    name: "BMW F10",
    'Anul Fabricatiei': "2020",
    Pret: "15000$"
}

// Arrays - siruri(numere, text, etc)
let cars = ["Golf", "BMW", "Skoda"];
const preturi = [12.5, 13.4, 69.1, 25.6, 53];
console.log(cars);
console.log(preturi);

const Lista1 = [cars[0], preturi[0]];

console.log("Autovehiculul", Lista1);
console.log(Detaliim);

