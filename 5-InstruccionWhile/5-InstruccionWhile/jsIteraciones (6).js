function Mostrar(){

	var contador=0;
	var acumulador=0;
	while (contador <5){
		var num1 = parseInt(prompt("Ingrese un numero"));
		//acumulador = acumulador+num1;
		acumulador +=num1;
		contador++;
	}


document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/5;

}//FIN DE LA FUNCIÓN