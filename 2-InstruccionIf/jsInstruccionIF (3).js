function Mostrar(){
//tomo la edad  
	var edad  =parseInt(document.getElementById("edad").value);
	if (edad>=18){
		alert("Eres mayor de edad");
	}else if (edad< 18){
		alert("Eres menor de edad");
	}

}//FIN DE LA FUNCIÓN