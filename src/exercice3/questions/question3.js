import data from '../data/stations';

console.log('exercice 3 - quest 3 data:', data);

/**
 * Ci-dessus, la liste des stations Mobilib à Paris.
 */

/**
 * Parmi les stations du 75015, quel est l'opérateur qui possède le plus de stations?
 * Utilise data comme base
 */

/**
 * les stations du 75015
 */

let number = 0;

for (let i = 0; i < data.length; i++) {
    if (data[i].fields.code_post === "75015") {
        number++
    }
    
}
console.log(number);

/**
 * l'opérateur qui possède le plus de stations?
 */

 /**
 * @correction
 * @Incorrect
 * Si tu regardes bien, fields contient un champs appelé opérateur qui corresponds à l'entreprise qui gère le site.
 */