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
	
	var PrecioFinal = precio * lamparas;
 	var descuentos  = "";
	 switch(lamparas){
		 case 1:
		 case 2:
		 		descuentos = PrecioFinal;
			 break;
		case 3:
			if(marca =="ArgentinaLuz"){
			descuentos = PrecioFinal*15/100;	
		}else if (marca =="FelipeLamparas") {
			descuentos = PrecioFinal*10/100;
		}else{
			descuentos = PrecioFinal*5/100;
		}
			break;
		case 4:
				if(marca =="ArgentinaLuz" || marca =="FelipeLamparas"){
					descuentos = PrecioFinal *25/100;
				}else{
					descuentos = PrecioFinal*20/100;
				}
			break;
		case 5:
			if (marca=="ArgentinaLuz") {
				descuentos = PrecioFinal *40/100;
			}
			else{
				descuentos = PrecioFinal *30/100;
			}	
			break;
			default:
				descuentos = PrecioFinal *50/100;
				break;
 }
 	document.getElementById("precioDescuento").value = descuentos;
	 /*
	if (lamparas >=6) {
		descuentos = PrecioFinal *50/100;
	}
	else if (lamparas ==5) {
		if (marca=="ArgentinaLuz") {
				descuentos = PrecioFinal *40/100;
		}
		else{
			descuentos = PrecioFinal *30/100;
		}	
	}
	else if (lamparas ==4) {
		if(marca =="ArgentinaLuz" || marca =="FelipeLamparas"){
			descuentos = PrecioFinal *25/100;
		}else{
			descuentos = PrecioFinal*20/100;
		}
	}
	else if (lamparas ==3) {
		if(marca =="ArgentinaLuz"){
			descuentos = PrecioFinal*15/100;	
		}else if (marca =="FelipeLamparas") {
			descuentos = PrecioFinal*10/100;
		}else{
			descuentos = PrecioFinal*5/100;
		}
	
}else if (lamparas <=2) {
	descuentos = PrecioFinal;
}

document.getElementById("precioDescuento").value = descuentos;
*/
}
