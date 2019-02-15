function Mostrar(){
	var edad = parseInt(document.getElementById("edad").value);
	var  select  = document.getElementById("estadoCivil").value;
	//var seleccionado = select.options[select.selectedIndex].value;

	/*if(edad <18 && select =="Soltero" || edad >18 && select == "Soltero"){
		alert("Es soltero y no es menor.");
	}*/
	if (edad >18 && edad <18 || select =="Soltero"){
		alert("Es soltero y no es menor");
	}
}//FIN DE LA FUNCIÓN