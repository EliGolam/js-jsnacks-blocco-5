// Initial Handshake
console.log('Script: LOADED!');

// Initialize containers
const liveCoding = document.getElementById('live-coding');
const exercise = [];
let message = '';


/* SNACK 1*/
/*
 * Creare un array di oggetti di squadre di calcio. 
 * Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
 * Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
 * Generare numeri random al posto degli 0 nelle proprietà:
 * punti fatti e falli subiti
*/


/* SNACK 2*/
/*
 * Si scriva una funzione che accetti tre argomenti, 
 * un array e due numeri (a più piccolo di b). 
 * La funzione ritornerà un nuovo array con i valori 
 * che hanno la posizione compresa tra i due numeri.
 */
function snack2(array, numA, numB) {
    let newArray = []
    if(numA < numB) {
        const tempArr = [];
        array.forEach(number => {
            if(number > num1 && number < num2) {
                tempArr.push(number);
            }
        })
        newArray = [numA, ...tempArr, numB];
    }
    else {
        const tempArr = [];
        array.forEach(number => {
            if(number > num2 && number < num1) {
                tempArr.push(number);
            }
        })
        newArray = [numB, ...tempArr, numA];
    }
    return newArray;
}

let num1 = 2;
let num2 = 23;
let numArray = [1, 1, 1, 2, 3, 4, 11, 50, 90];

let newNumArr = snack2(numArray, num1, num2);
message = `Snack2 : ${newNumArr}`;
exercise.push(message);

/* SNACK 3*/
/* 
 * Crea 10 oggetti che rappresentano una zucchina.
 * Dividi in due array separati le zucchine che misurano meno o più di 15cm.
 * Infine stampa separatamente quanto pesano i due gruppi di zucchine.
 */

const zucchina = {
    color: 'green',
    length: 0,
    weight: 4,
}

const zucchine = [];

zucchine.push({...zucchina, length: 10, weight: 1});
zucchine.push({...zucchina, length: 12, weight: 1});
zucchine.push({...zucchina, length: 15, weight: 1});
zucchine.push({...zucchina, length: 20, weight: 2});
zucchine.push({...zucchina, length: 10, weight: 1});
zucchine.push({...zucchina, length: 18, weight: 6});
zucchine.push({...zucchina, length: 19, weight: 4});
zucchine.push({...zucchina, length: 11, weight: 2});
zucchine.push({...zucchina, length: 17, weight: 1});
zucchine.push({...zucchina, length: 9, weight: 3});

console.log(zucchine);

function propertyFilter(arrayOfObjects, property, filterValue) {
    const filterArray1 = [];
    const filterArray2 = [];

    arrayOfObjects.forEach((object) => {
        if (object[property] <= filterValue) {
            filterArray1.push(object);
        }
        else if (object[property] > filterValue) {
            filterArray2.push(object);
        }
    })

    return [filterArray1, filterArray2];
}

let zucchineBySize = propertyFilter(zucchine, 'length', 15)
console.log('Zucchine piu corte di 15', zucchineBySize[0]);
console.log('Zucchine piu lunghe di 15', zucchineBySize[1]);

let weightShort = 0;
let weightLong = 0;

zucchineBySize[0].forEach(zucchina => {
    weightShort += zucchina.weight;
})

zucchineBySize[1].forEach(zucchina => {
    weightLong += zucchina.weight;
})

message = `Snack3 - Weight Short: ${weightShort}`;
exercise.push(message);

message = `Snack3 - Weight Long: ${weightLong}`;
exercise.push(message);




// RESULTS
for (let i = 0; i < exercise.length; i++) {
    const result = document.createElement('p');
    result.classList.add('result');
    result.innerHTML = exercise[i];
    liveCoding.append(result);
}
 