//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar(){
	var num1 = parseInt(prompt("ingrese un numero"));
	var num2 = parseInt(prompt("ingrese otro numero"));
	var resultado;
	var mensaje;
	while (num1 && num2 <0 || isNaN(num1) && isNaN(num2)) {
		num1 = parseInt(prompt("ingrese un numero"));
		num2 = parseInt(prompt("ingrese otro numero"));
	}
	if(num1 === num2){
		resultado = num1 * num2;
		mensaje = "la multiplicacion es "+resultado;
	}else if (num1 > num2) {
		resultado =num1 - num2;
		mensaje = "la resta es "+resultado;
		
	}else{
		resultado =num1 + num2;
		mensaje = "La suma es " + resultado;
		
	}
	document.write(mensaje);
}

