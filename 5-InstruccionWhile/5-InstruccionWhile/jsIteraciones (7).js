function Mostrar(){

	var contador=0;
	var acumulador=0;
	var respuesta="si";
	while (contador <= respuesta !== "no") {
		var num1 =prompt("ingrese un numero");
		acumulador +=num1;
		contador++;
		respuesta = num1;
		console.log(contador);
	}

/*
	var num=parseInt(prompt("Es"));
	console.log(typeof(num));
	var s = num.toString();
	console.log(typeof(s));*/
document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/contador;

}//FIN DE LA FUNCIÓN