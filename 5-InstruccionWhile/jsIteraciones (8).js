function Mostrar()
{

	var contador=0;
	var positivo=0;
	var negativo=1;
	
	var respuesta="si";
	do{
		num1 = parseInt(prompt("Ingrese un numero"));
		num2 = parseInt(prompt("Ingrese otro numero"));
		positivo +=num1;
		negativo *=num2;
		pregunta = prompt("Desea continuar");
		respuesta =pregunta;
		contador++;
	}while(num2 < 0 &&pregunta !="no");

document.getElementById("suma").value=positivo;
document.getElementById("producto").value=negativo;

}//FIN DE LA FUNCIÓN