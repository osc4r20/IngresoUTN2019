//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar() {
	var notas;
	var sexo;
	var promedio;
	var acumulador = 0;
	var notabaja;
	var contadorV = 0;
	var flag = 0;

	for(var i =1; i <=6; i++){
		notas = parseInt(prompt("Ingrese notas"));
		while (notas <=0 || nota > 10 || isNaN(notas)) {
				notas = parseInt(prompt("Error. Reingrese las notas"));
		}
		sexo = prompt("Ingrese Sexo");
		while (sexo != "m" && sexo !="f") {
			sexo = prompt("Reingrese Sexo");
		}
		acumulador +=notas;
		if (nota < notabaja || flag == 0) {
			notabaja= notas;
			flag = 1;
		}
		if (sexo =="m" && notas >= 6) {
			contadorV++;
		}
	}
	promedio = acumulador / 6;

}

