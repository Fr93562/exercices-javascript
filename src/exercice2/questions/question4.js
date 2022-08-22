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

/**
 * @correction
 * @Incorrect
 * @question Sur quoi que tu te bases pour indiquer 25?
 * @question A quoi cela te sert de vérifier nom_site? Alors que tu cherches le nombre de borne wifi
 * 
 * La première étape est de trier ton tableau javascript.
 * Il existe plein d'exemples sur internet. T'as fait une recherche?
 * 
 * Ton tri se fait de manière croissante. Donc tu sais que le dernier item de ta liste est celui qui a le plus de borne wifi.
 * La dernière étape sera de filtrer dans le tableau, les items qui ont autant de bornes wifi que le dernier élément de la liste
 * Qu'as tu analyser et conclue en analysant les données et ma question?
 * 
 * C'est quoi qui t'a bloqué du coup?
 * 
 * @url : https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
 * @url : https://www.zendevs.xyz/comment-trier-un-tableau-en-javascript-avec-la-methode-sort/
 * @url: https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
 */

let sort = data.sort((firstItem, secondItem) => { return firstItem.fields.nombre_de_borne_wifi - secondItem.fields.nombre_de_borne_wifi });
let correction = sort.filter(item => item.fields.nombre_de_borne_wifi >= sort[sort.length - 1].fields.nombre_de_borne_wifi);
console.warn('ex 2 - quest 4', correction);
