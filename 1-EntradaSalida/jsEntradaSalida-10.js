/*Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function MostrarDescuento(){
	var importe  = parseInt(document.getElementById("importe").value);
	var descu= importe *25 /100;
	var mostrar = parseInt(document.getElementById("resultado").value = descu);
}
