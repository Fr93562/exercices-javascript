import data from '../data/wifi';

console.log('exercice 2 - quest 2 data:', data);

/**
 * Ci-dessus, la liste des sites possédant une borne wifi à Paris.
 * Remarque: attention au paramètre état2 de fields qui peut poser certains soucis. Dans ce cas, tu passes
 */

/**
 * Le nombre total de site avec une borne wifi dont le code postal est 75001
 * Utilise data comme base
 */

/**
 * Insère ton code en dessous
 */
 let nombreSiteWifi = 0

 for (let i = 0; i < data.length; i++) {
     if (data[i].fields.cp === '75001') {
         nombreSiteWifi++;
     }
     
 }
 console.log(nombreSiteWifi)