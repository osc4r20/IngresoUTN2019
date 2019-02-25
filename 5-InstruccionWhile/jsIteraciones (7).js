function Mostrar()
{

	var contador=0;
	var acumulador=0;
	var respuesta="si";
	var num1;
	var pregunta;
	//var pregunta = prompt("Desea continuar");
	do{
		num1 = parseInt(prompt("Ingrese un numero"));
		
		acumulador +=num1;
		pregunta = prompt("Desea continuar");
		respuesta =pregunta;
		contador++;
	}while(respuesta !="no");

document.getElementById("suma").value=acumulador;
document.getElementById("promedio").value=acumulador/contador;

}//FIN DE LA FUNCIÓN