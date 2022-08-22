import data from '../data/stations';

console.log('exercice 3 - quest 2 data:', data);

/**
 * Ci-dessus, la liste des stations Mobilib à Paris.
 */

/**
 * Parmi les stations dans le 75018, combien appartiennent à l'opérateur UBEEQO?
 * Utilise data comme base
 */

/**
 * Insère ton code en dessous
 */

let number = 0;
for (let i = 0; i < data.length; i++) {
    if (data[i].fields.code_post === "75018" && data[i].fields.operateur === "UBEEQO"){
        number++;
    }
    
}
console.log(number);

 /**
 * @correction
 * @Correct
 * Pas besoin que je mette une correction pour celui-ci.
 * Attention car parfois, les données de certaines API peuvent être mal remplies. Tu pourras avoir à la fois des oui et Oui.
 * Dans ces cas là, il faut formater avant de comparer. Sinon, tu prends des risques.
 */