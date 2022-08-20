import data from '../data/commerces';

console.log('exercice 4 -quest 1 data:', data);

/**
 * Ci-dessus, un extrait de l'api des commerces pendant le coronavirus
 */

/**
 * Parmi les fromagers, combien fabriquent leur produits à Paris?
 * Utilise data comme base
 */
let number = 0;
for (let i = 0; i < data.length; i++) {
    if (data[i].fields.type_de_commerce === "Fromagerie" && data[i].fields.fabrique_a_paris === "oui") {
        number++;
    }
    
};
console.log(number);

