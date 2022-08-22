import data from '../data/wifi';

console.log('exercice 2 quest - 3 data:', data);

/**
 * Ci-dessus, la liste des sites possédant une borne wifi à Paris.
 * Remarque: attention au paramètre état2 de fields qui peut poser certains soucis. Dans ce cas, tu passes
 */

/**
 * Le pourcentage de site avec le wifi faisant parti du 75001 parmi la totalité des site avec du wifi
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
 * @Incorrect
 * La première étape est de d'abord récupérer la liste des site du 75001. Tu l'as déjà fait avec le 75010, porquoi l'as tu pas fait ici?
 * Ensuite, il faut calculer le pourcentage. Le formule du pourcentage est celui-ci: (parti / total) * 100
 * 
 * C'est quoi qui t'a bloqué du coup?
 * 
 * @url : https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
 * @url : https://trucmania.ouest-france.fr/comment-calculer-un-pourcentage/
 */

   let extract = data.filter(item => item.fields.cp === '75001');
   let correction = (extract.length / data.length) * 100;
   console.warn('ex 2 - quest 3', correction);