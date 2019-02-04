/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar(){	
	var sum1 = parseInt(document.getElementById('numeroUno').value);
    var sum2 = parseInt(document.getElementById('numeroDos').value);
    var resultado = sum1 + sum2;
    alert("La Suma es: "+resultado);
}

function restar(){
	var sum1 = parseInt(document.getElementById('numeroUno').value);
    var sum2 = parseInt(document.getElementById('numeroDos').value);
    var resultado = sum1 - sum2;
    alert("La Resta es: "+resultado);
}

function multiplicar(){ 
	var sum1 = parseInt(document.getElementById('numeroUno').value);
    var sum2 = parseInt(document.getElementById('numeroDos').value);
    var resultado = sum1 * sum2;
    alert("La Multiplicacion es : "+resultado);	
}

function dividir(){
	var sum1 = parseInt(document.getElementById('numeroUno').value);
    var sum2 = parseInt(document.getElementById('numeroDos').value);
    var resultado = sum1 / sum2;
    alert("La Division es: "+resultado);	
}

