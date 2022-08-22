import data from '../data/wifi';

console.log('exercice 2 -quest 1 data:', data);

/**
 * Ci-dessus, la liste des sites possédant une borne wifi à Paris.
 * Remarque: attention au paramètre état2 de fields qui peut poser certains soucis. Dans ce cas, tu passes
 */

/**
 * Le nombre total de site possédant une borne wifi
 * Utilise data comme base
 */

/**
 * Insère ton code en dessous
 */

let nombreSiteWifi = 0
for (let i = 0; i < data.length; i++) {
    if (data[i].fields.nombre_de_borne_wifi) {
        nombreSiteWifi++;
    }
    
}
console.log(nombreSiteWifi)

/**
 * @correction
 * Ton algorithme fonctionne. Néanmoins, il est pas du tout optimisé.
 * T'aurais pu directement récupéré la taille de ton tableau.
 */

console.warn('ex 2 - quest 1', data.length);