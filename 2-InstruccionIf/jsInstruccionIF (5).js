function Mostrar(){
//tomo la edad  
    var edad = parseInt(document.getElementById("edad").value);
    if(!(edad >12 && edad <18)){
        alert("No es adolescente");
    }
}//FIN DE LA FUNCIÓN