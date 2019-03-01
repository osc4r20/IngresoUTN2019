function Mostrar(){
	var num = parseInt(prompt("Ingrese un número"));
	var contador = 0;
	while(num <0 ||  isNaN(num)){
			num = parseInt(prompt("ingrese un número"));	
	}
		for (var i = 1; i <= num; i++) {
			if (num % i ==0) {
				console.log(i);
				contador++;
			}
		}
	console.log("El numero divisor "+ contador);
}//FIN DE LA FUNCIÓN
