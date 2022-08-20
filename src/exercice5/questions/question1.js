import data from '../data/articles';

console.log('exercice 4 -quest 1 data:', data);

/**
 * Ci-dessus, un extrait des données d'un exercice meilleur dev de France
 */

/**
 * Data contient une liste de string
 * Cette liste de string est toujours composé d'un chiffre et de lettres qui sont séparés par un espace
 * Le chiffre représente le nombre d'article et les lettres représentent le nom de l'article en question
 */

/**
 * Parmi tout les articles en stock. Quel est l'article qu'il y a le plus en terme de quantité?
 */

/**
 * Insère ton code en dessous
 */

function articleQuantité (data) {
    let plusGrand = data[0];
    for (let i = 0; i < data.length -1; i++) {
        let valeur = data[i]
        if (data[i] > plusGrand ) {
            plusGrand = valeur;
        }
    }
    console.log(plusGrand);
}
articleQuantité(data);
