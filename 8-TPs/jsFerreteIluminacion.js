/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
function CalcularPrecio (){
	var lamparas = parseInt(document.getElementById("Cantidad").value);
	var marca = document.getElementById("Marca").value;
	var precio = 35;
	
	var descuento50 = (precio * lamparas)*50/100;
	var descuento40 = (precio * lamparas)*40/100;
	var descuento30 = (precio *lamparas) * 30/100;
	var descuento25 = (precio * lamparas)*25 /100;
	var descuento20 = (precio *lamparas)*20/100;
	var descuento15 = (precio * lamparas)*15/100;
	var descuento10 = (precio * lamparas) * 10/100;
	var descuento5 = (precio * lamparas)* 5/100;

	//se aplica el descuento a 6
 	//aplica el 50% de descuento
 
 /*if(lamparas >=6){
 		document.getElementById("precioDescuento").value = descuento50;
 	}

 	else if (lamparas == 5 && marca =="ArgentinaLuz") {
 		document.getElementById("precioDescuento").value = descuento40;
 	}else{
 		document.getElementById("precioDescuento").value = descuento30;
	
		if(lamparas ==4  && ((marca == "ArgentinaLuz")  || (marca == "FelipeLamparas"))) {
				document.getElementById("precioDescuento").value = descuento25;
		
		}else{
			document.getElementById("precioDescuento").value = descuento20;
		}
	
	}

*/
/*
	if(lamparas ===4  && ((marca == "ArgentinaLuz")  || (marca == "FelipeLamparas"))) {
			document.getElementById("precioDescuento").value = descuento25;
		}
		else{
			if(lamparas >5){
				document.getElementById("precioDescuento").value = descuento50;

			}else if(lamparas ===5 && marca == "ArgentinaLuz"){
					document.getElementById("precioDescuento").value = descuento40;
				}else{
					document.getElementById("precioDescuento").value = descuento30;
				
			}

		
*/
	if (lamparas <=3 && marca =="ArgentinaLuz") {
		document.getElementById("precioDescuento").value = descuento15;
	}else if (marca =="FelipeLamparas") {
		document.getElementById("precioDescuento").value = descuento10;
	}else{
		document.getElementById("precioDescuento").value =descuento5;
	}
	if (lamparas >=6 ) {
		// statement
	}
}



 
