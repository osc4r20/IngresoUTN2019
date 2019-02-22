function Mostrar(){

	var contador=0;
	var acumulador=0;
	var num1;
	while (contador <5){
		 num1 = parseFloat(prompt("Ingrese un numero "+contador));
		//acumulador = acumulador+num1;
		acumulador +=num1; // suma el valor de "acumulador" con el nuevo valor de "num1"
		contador++; // incrementa el valor para llegar a la condicion de while 
	}
	document.getElementById('suma').value=acumulador;
	document.getElementById('promedio').value=acumulador/5;

}//FIN DE LA FUNCIÓN
