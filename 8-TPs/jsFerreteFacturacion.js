/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar (){
	var cajaS = parseInt(document.getElementById("PrecioUno").value);
    var caja1 = parseInt(document.getElementById("PrecioDos").value);
    var caja2 = parseInt(document.getElementById("PrecioTres").value);

    var resultado = cajaS + caja1 + caja2; 
    alert("El resultado es: " + resultado);
}
function Promedio (){
	var cajaP = parseFloat(document.getElementById("PrecioUno").value);
    var caja1 = parseFloat(document.getElementById("PrecioDos").value);
    var caja2 = parseFloat(document.getElementById("PrecioTres").value);
    
    var suma = cajaP + caja1 + caja2;
    var promedio = suma / 3;
    alert("El promedio es: " + promedio);

}
function PrecioFinal (){
	var cajaF = parseInt(document.getElementById("PrecioUno").value);
    var caja1 = parseInt(document.getElementById("PrecioDos").value);
    var caja2 = parseInt(document.getElementById("PrecioTres").value);

    var suma = cajaF + caja1 + caja2;
    var iva = suma * 21 / 100;
    var preciofinal = suma + iva;
    alert("Iva: " + preciofinal);
    
}