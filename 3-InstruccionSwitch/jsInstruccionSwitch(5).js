function Mostrar()
{
//tomo la hora 
var laHora = parseInt(document.getElementById('hora').value);
//alert (laHora);
	
switch(true){
    // se le puede agregar && dentro de case ()
  //  case (laHora >=7 && laHora <=11):
    case 7:
    case 8:
    case 9:
    case 10:
    case 11:
        alert("Es de mañana.");
     break;
}	


}//FIN DE LA FUNCIÓN