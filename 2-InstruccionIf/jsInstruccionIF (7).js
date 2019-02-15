function Mostrar(){
//tomo la edad  
	var edad = parseInt(document.getElementById("edad").value);
	var  lista  = document.getElementById("estadoCivil").value;
	


	if(edad <18 &&  lista != "Soltero"){
	alert("No es muy pequeño para No ser soltero. "/*+ lista*/);
	}	


}//FIN DE LA FUNCIÓN