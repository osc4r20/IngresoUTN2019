function Mostrar(){

	var numero = prompt("ingrese un número entre 0 y 10.");

	while (numero >=0 && numero <=10) {
		console.log("el numero es," +numero);
		document.getElementById("Numero").value = numero;
		break;
	}

}//FIN DE LA FUNCIÓN