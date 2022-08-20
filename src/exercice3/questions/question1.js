import data from '../data/stations';

console.log('exercice 3 -quest 1 data:', data);

/**
 * Ci-dessus, la liste des stations Mobilib à Paris.
 */

/**
 * Quel est le nombre total de stations fonctionnelles?
 * Utilise data comme base
 */

/**
 * Insère ton code en dessous
 */
let number = 0;

for (let i = 0; i < data.length; i++) {
    if(data[i].fields.fonctionnelle === "Oui") {
        number++;
    }
    
};
console.log(number);