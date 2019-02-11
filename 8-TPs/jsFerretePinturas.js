/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados (){
	var temperatura = parseFloat(document.getElementById("Temperatura").value);
    var Fahrenheit = (temperatura -32) * 5/9;
    
    alert("la temperatura de Fahrenheit a Centigrados es: "+Fahrenheit.toFixed(2));
}

function CentigradosFahrenheit (){
		var temperatura = parseFloat(document.getElementById("Temperatura").value);
        var Centigrados = (temperatura  *1.80) + 32;
    
    alert("la temperatura en  Centigrados a Fahrenheit es: "+Centigrados.toFixed(2)+ " ℉");
}
