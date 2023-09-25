var nom= prompt("Ingrese su nombre y apellido")
alert(nom + " Bienvenido a el cuestionario sobre los mares")
var res1 = prompt("¿Cuánta agua hay en la Tierra?\nA: Alrededor de un 41% de la superficie terrestre es agua\nB: Alrededor de un 51% de la superficie terrestre es agua\nC: Alrededor de un 71% de la superficie terrestre es agua")
if(res1=="C"){
    res1 = 1;
}else{
    res1 = 0;
}
var res2 = prompt("¿Qué océano es el más grande?\nA: El Pacífico\nB: El Atlántico\nC: El Índico")
if(res2=="A"){
    res2 = 1;
}else{
    res2 = 0;
}
var res3 = prompt("¿Cuánto mide la parte más profunda de los Océanos?\nA: 11 Km\nB: 23 Km\nC: 31 Km")
if(res3=="A"){
    res3 = 1;
}else{
    res3 = 0;
}
var total= res1 + res2 + res3 
document.write("<h1>Examen</h1>")
document.write("Respuestas <br>")
document.write(nom + " tu cantidad de respuestas correctas es " + total)
if(total == 3){
document.write("<br> Lo has echo bien "+ nom)
}else{if(total == 2){
    document.write("<br> Puedes hacerlo mejor "+ nom)}}
if(total == 0){
    document.write("<br> Lo has echo mal "+ nom)
}else{if(total==1){
    document.write("<br> Lo has echo mal "+ nom)
}}
