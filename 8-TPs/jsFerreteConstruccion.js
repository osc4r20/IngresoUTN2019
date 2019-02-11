/*2.	Para el departamento de Construcción:
A.	 Mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	Mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () {
    var largo = parseFloat(document.getElementById("Largo").value);
    var ancho = parseFloat(document.getElementById("Ancho").value);
    var perimetro = (largo + ancho) * 2;
    var total = perimetro * 3;
    alert("El perimetro es: " + total);
    
}
function Circulo () {
	var circulo = parseFloat(document.getElementById("Radio").value);
    var radio = Math.PI * 2 * circulo;
    var resultado = radio * 3;
    alert("Se necesitan " + resultado.toFixed(1) + " de alambre");
}
function Materiales (){
	var largo = parseFloat(document.getElementById("Largo").value);
    var ancho = parseFloat(document.getElementById("Ancho").value);

    var superficie = largo * ancho;
    var cal = superficie * 3;
    var cemento = superficie * 2;
    alert("Para una superficie de : " +superficie + " se necesitan "+ cal + " bolsas de cal y " +cemento + " bolsas de cemento");
}