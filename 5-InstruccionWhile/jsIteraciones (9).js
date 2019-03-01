function Mostrar(){

	// declarar variables
	var num1;
	var pregunta;
	var max = 0;
	var min = 0;
	var respuesta="si";
	var contador=0;
	do{
		num1 = parseInt(prompt("Ingrese un numero "));
		pregunta = prompt("Desea continuar").toLowerCase();
		if(num1 > max){
			max = num1;
		}
		else{
			min = num1;
		}
		contador++;
		respuesta =pregunta;
	}
	while (respuesta!="no");
	/*while(respuesta!="no"){
		pregunta = prompt("Desea continuar").toLowerCase();
		console.log(max =num1);
		respuesta =pregunta;
		contador ++;
	}*/

document.getElementById("maximo").value = max 
document.getElementById("minimo").value = min


}//FIN DE LA FUNCIÓN