//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar(){
	var precio = parseInt(prompt("precio: "));
	var importe = precio*21/100;
	var preciofinal = precio + importe;
	document.getElementById("importe").value = preciofinal;

}

