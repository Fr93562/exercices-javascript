import data from '../data/wifi';

console.log('exercice 2 quest - 5 data:', data);

/**
 * Ci-dessus, la liste des sites possédant une borne wifi à Paris.
 * Remarque: attention au paramètre état2 de fields qui peut poser certains soucis. Dans ce cas, tu passes
 */

/**
 * Quel est le nombre de site wifi qui ne sont pas opérationnels?
 * Utilise data comme base
 */

/**
 * Insère ton code en dessous
 */

 let nombreSiteWifi = 0
 for (let i = 0; i < data.length; i++) {
     if (data[i].fields.etat2 !== "Op\u00e9rationnel") {
         nombreSiteWifi++;
     }
     
 }
 console.log(nombreSiteWifi)

 /**
 * @correction
 * @Correct
 * Pas besoin que je mette une correction pour celui-ci.
 */