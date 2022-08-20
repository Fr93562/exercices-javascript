import data from '../data/commerces';

console.log('exercice 4 - quest 2 data:', data);

/**
 * Ci-dessus, un extrait de l'api des commerces pendant le coronavirus
 */

/**
 * Parmi l'ensemble des commerçants combien n'ont ni renseigné leur téléphone ni leur mail?
 * Utilise data comme base
 */

/**
 * Insère ton code en dessous
 */

let number = 0;
for (let i = 0; i < data.length; i++) {
    if (data[i].datasetid  && data[i].fields.mail ==="" && data[i].fields.telephone ==="" ) {
        number++;
    }
    
}
console.log(number);