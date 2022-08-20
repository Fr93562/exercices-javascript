import data from '../data/wifi';

console.log('exercice 2 - quest 4 data:', data);

/**
 * Ci-dessus, la liste des sites possédant une borne wifi à Paris.
 * Remarque: attention au paramètre état2 de fields qui peut poser certains soucis. Dans ce cas, tu passes
 */

/**
 * Quels sont les site wifi à Paris qui ont le plus de borne wifi?
 * Utilise data comme base
 */

/**
 * Insère ton code en dessous
 */

 let nombreSiteWifi = 0
 for (let i = 0; i < data.length; i++) {
     if (data[i].fields.nombre_de_borne_wifi > 25 && data[i].fields.nom_site) {
         nombreSiteWifi++;
     }
     
 }
 console.log(nombreSiteWifi)