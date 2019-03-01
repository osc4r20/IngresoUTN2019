function Mostrar(){

	var contador=0;
	var positivo=0;
	var negativo=1;
	var num1;
	var respuesta="si";
	do{
		num1 = parseInt(prompt("Ingrese un numero"));
		//pido al usuario si continua 
		pregunta = prompt("Desea continuar").toLowerCase();
		respuesta =pregunta;
		if (num1 >0) {
			positivo += num1;
		}
		else{
			negativo *=num1;
		}
		contador++;
	}while(respuesta !="no");

document.getElementById("suma").value=positivo;
document.getElementById("producto").value=negativo;

}//FIN DE LA FUNCIÓN