function Mostrar(){
	//Genero el número RANDOM entre 1 y 10 
	var alazar = Math.round(Math.random()*10);
	if (alazar >=9){
		console.log("Excelente");
	}else if (alazar >=4) {
		console.log("Aprobo");
	}else{
		console.log("Vamos la proxima se puede.");
	}

}//FIN DE LA FUNCIÓN