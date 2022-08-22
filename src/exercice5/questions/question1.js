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

 /**
 * @correction
 * @Incorrect 
 *
 * Tu compares de manière à peu près correct un item par rapport à un autre.
 * Mais tu compares pas les chiffres. Tu compares les string entre eux.
 * Et en javascript, trier les strings. Cela revient à comparer la longueur du string
 * 
 * La première étape aurait était de créer un nouveau tableau et transformer l'objet au passage
 * Afin de le rendre plus facilement utilisable
 */

 let array = [];

 for (let i = 0; i < data.length; i++) {
    const decomposedItem = data[i].split(' ');
    const item = {
        quantity: parseInt( decomposedItem[0], 10),
        article: decomposedItem[1],
    };
    
    array.push(item);
 }

 const sort = array.sort((firstItem, secondItem) => {return firstItem.quantity - secondItem.quantity});
 const correction = sort[sort.length - 1];
  console.warn('ex 5 - quest 1', correction.article);
 