function mostrar()
{
//tomo la edad  
var mesDelAño = document.getElementById('mes').value;

console.log("mes del año");

switch(mesDelAño)
{
	case "Enero":
	case "Febrero":
	case "Marzo":
	case "Abril":
	case "Mayo":
	case "Junio":


	    alert("falta para el invierno");
	    break;

	    case "Julio":
	    case "Agosto":
	    alert ("estamos en invierno");
	    break;
	    default:
	    alert( "ya pasamos el invierno, ahora calor!!!");

	    break;






	


}






}//FIN DE LA FUNCIÓN