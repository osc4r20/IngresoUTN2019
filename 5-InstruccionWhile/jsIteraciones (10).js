function Mostrar(){

	//declarar contadores y variables 
	var contador=0;
	var respuesta="si";
	var positivos = 0;
	var negativos = 0;
	var pregunta;
	var CPositivos=0;
	var CNegativos=0;
	var ceros= 0;
	var NumPares =0;
	var num;
	do{
		num = parseInt(prompt("Ingrese un numero "));
		pregunta = prompt("Desea continuar").toLowerCase();
		if (num >0){
			positivos +=num;
			CPositivos++;
		}else if(num <0){
			negativos +=num;
			CNegativos ++;
		}
		else{
			ceros++;
		}
		if (num%2 == 0){
			NumPares++;
		}
		
		contador++;
		respuesta =pregunta;
	}
	while(respuesta!="no");
//	document.write("La suma de los positivos son: "+ positivos +"<br>");
//	document.write("La cantidad de positivos son: "+CPositivos+ "<br>");
//	document.write("El promedio de los positivos es :" +positivos /CPositivos);
	console.log(" La suma de los positivos son: "+ positivos);
	console.log(" La cantidad de positivos son: "+CPositivos);
	console.log(" El promedio de los positivos es :" +positivos /CPositivos);
	console.log(" La cantidad de numeros pares son: "+NumPares);
	console.log(" La suma de los numeros negativos  son "+negativos);
	console.log(" La cantidad de negativos son: "+ CNegativos);
	console.log("La cantidad de ceros son: "+ceros);
	console.log("El promedio del los numeros negativos son: "+negativos/CNegativos);
	console.log("La diferencia  de los numeros negativos y positivos es: "+CPositivos - CNegativos);
}//FIN DE LA FUNCIÓN