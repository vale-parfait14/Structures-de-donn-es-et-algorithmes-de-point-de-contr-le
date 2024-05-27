
/*

Avant de procéder à l'allabortion de notre code nous devant etre préci sur le but de ce dernier ,
à savoir de faire une rangement dans une structure Array autre dit de rendre notre tableau de nombres et chiffres  plus ordonnés.

Pour se faire bien entendu nous devons avoir un tableau près à l'emploi.

Je m'octroie alors une tableau nommé ARRAY qui contiendra les chiffres et nombres suivant : [99,1,55,10,0,5,-100].

Pour effectuer mon tri je fais recours à la methode SORT() qui  me permettra de faire mon tri simplement. la methode reverra une suite

de  chiffres et de nombres croissant ou décroissant selon l'ordre indiqué dans notre RETURN.

Si par exemple notre RETURN retourne "a-b" la sortie sera un tableau classer du plus petit au plus grand.
Mais si notre retour prend "b + a" la sortie sera non ordonné.


 exemple :
 
 /// teste 1 :

  var array = [99,1,55,10,0,5,-100];

 array.sort(function tab (a,b){
    return a - b;
 })

 console.log(array);
 



 //teste 02 :
  var array = [99,1,55,10,0,5,-100];

 array.sort(function tab (a,b){
    return b + a;
 })

 console.log(array);
 
*/


