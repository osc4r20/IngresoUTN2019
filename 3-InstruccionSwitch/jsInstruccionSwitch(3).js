function Mostrar(){
//tomo el mes 
var mesDelAnio = document.getElementById('mes').value;

//alert (mesDelAño);
switch(mesDelAnio){
    case "Febrero":
        alert("Este mes no tiene mas de 29 dias ");
        break;
    default:
        alert("Este mes tiene 30 o más días");
        break;

}	


}//FIN DE LA FUNCIÓN