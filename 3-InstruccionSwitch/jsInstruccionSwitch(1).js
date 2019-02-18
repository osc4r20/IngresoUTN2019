function Mostrar(){
//tomo el mes
var mesDelAnio = document.getElementById('mes').value;

switch (mesDelAnio){
	case "Enero":
		alert("Que comiences bien el año!!!.");
		break;
	case "Marzo":
		alert("A clases!!!.");
		break;
	case "Julio":
		alert("Se vienen las vacaciones!!!.");
		break;
	case "Diciembre":
		alert("Felices fiesta!!!.");
		break;

	default:
		alert("Elige de nuevo");
		break;
	}



}//FIN DE LA FUNCIÓN