function Mostrar(){
	//Genero el número RANDOM entre 1 y 10 
	var Alazar = Math.floor(Math.random()*10 +1);
	if (Alazar >=9){
		alert("Excelente "+Alazar);
	}else if (Alazar >=4) {
		alert("Aprobo "+ Alazar);
	}else{
		alert("Vamos la proxima se puede. "+ Alazar);
	}

}//FIN DE LA FUNCIÓN