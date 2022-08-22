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

 /**
 * @correction
 * @Incorrect 
 * As-tu consulté les données? Il existe bien un commerçant qui n'a ni mail ni téléphone
 * Au niveau des API, il peut arriver que quand un champs n'est pas rempli et laissé vide.
 * Alors le paramètre n'est pas envoyé et est absent de l'objet. Au lieu d'avoir un string vide
 */

 let correction = data.filter(item => !item.fields.mail && !item.fields.telephone);
 console.warn('ex 4 - quest 2', correction);
