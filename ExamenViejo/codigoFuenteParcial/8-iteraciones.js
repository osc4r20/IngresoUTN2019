//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar() {
	var numero;
	var seguir;
	var acumulador = 0;
	var contador = 0;
	var promedio;
	var max:
	var min;
	var flag = 0;
	var par = 0;
	do{

		numero = parseInt(prompt("el importe de ventas del dia: "+ i));
			while (numero <=0 || isNaN(numero)) {
					numero = parseInt(prompt("Error. reingrese numero" ));
			}
			acumulador += numero;
			contador++;
			if (numero %2 == 0) {
				par++;
			}
			if (numero > max ||flag ==0) {
				max = numero;
			}
			if(numero < min || flag == 0){
				min = numero;
				flag =1;
			}
		seguir =confirm("quiere continuar");
	}while (condition);

}

