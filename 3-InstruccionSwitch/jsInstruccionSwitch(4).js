function Mostrar(){
//tomo el mes 
var mesDelAnio = document.getElementById('mes').value;

switch(mesDelAnio){
    case "Febrero":
        alert("si tiene 28 días");
        break;
    case "Abril":
    case "Junio":
    case "Septiembre":
    case "Noviembre":
        alert("tiene 30 dias");
        break;
    default:
        alert("si tiene 31 días.");
}
	
	



}//FIN DE LA FUNCIÓN