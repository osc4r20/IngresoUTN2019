function Mostrar(){
	var edad = parseInt(document.getElementById("edad").value);
	var  lista  = document.getElementById("estadoCivil").value;
	

	/*if(edad <18 && lista =="Soltero" || edad >18 && select == "Soltero"){
		alert("Es soltero y no es menor.");
	}
	if (edad >18 && edad <18 || lista =="Soltero"){
		alert("Es soltero y no es menor");
	}
	*/
	
	if(edad >=18  && lista == "Soltero"){
			alert("Es soltero y no es menor");
	}
}//FIN DE LA FUNCIÓN
