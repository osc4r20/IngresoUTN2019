//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar(){
	var importe;
	var mayor;
	var menor;
	var diaMa;
	var diaMe;
	var flag =0;

		for(var i =1; i <=7; i++){
			importe = parseInt(prompt("el importe de ventas del dia: "+ i));
			while (importe <=0 || isNaN(importe)) {
					importe = parseInt(prompt("Error. Reingrese importe de ventas del dia: " + i));
			}
			if (importe > mayor || flag ==0){
				mayor = importe;
				diaMa = i;
			}
			if(importe < menor || flag ==0){
				menor = importe;
				diaMe = i;
				flag = 1;
			}
		}
		console.log("El importe mas alto fue de :" +mayor + " en el dia " +diaMa);
		console.log("El importe menos bajo fue de: "+ menor + " en el dia "+ diaMe);
	
}

