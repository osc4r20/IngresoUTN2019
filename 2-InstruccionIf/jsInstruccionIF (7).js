function Mostrar(){
//tomo la edad  
	var edad = parseInt(document.getElementById("edad").value);
	var  select  = document.getElementById("estadoCivil").value;
	//var seleccionado = select.options[select.selectedIndex].value;


	if(edad <18 &&  select != "Soltero"){
		alert("No es muy pequeño para No ser soltero. "/* + seleccionado*/);
	}	


}//FIN DE LA FUNCIÓN