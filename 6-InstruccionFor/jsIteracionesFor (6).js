function Mostrar(){
	var num = parseInt(prompt("Ingrese un numero"));
	var contador = 0;
	while(num <0 ||  isNaN(num)){
			num = parseInt(prompt("ingrese un número"));	
	}
		for (var i = 1; i <= num; i++) {
			if (i % 2 == 0) {
				console.log(i);
				contador++;
			}
		}
	console.log("El numero par es "+ contador);
}//FIN DE LA FUNCIÓN