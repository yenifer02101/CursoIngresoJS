function mostrar()
{

	var contador=0;
	// declarar variables
	
	var respuesta='si';

	while(respuesta!='no')
	{
		var nota;
		nota=prompt("");
		nota=parseint(nota);
		while( isNaN(nota==true||<0 || nota>10)
		{
			nota= prompt("error");
			nota= parseinte(nota);

		}
		alert(nota);
		
		var sexo;
		sexo=prompt("");
		while(isNaN(sexo)==false||sexo!="f"&&sexo!="m")
		{
			sexo= prompt(error);
		}	
	}alert(sexo);
	respuesta=prompt("continuar");




}//FIN DE LA FUNCIÓN