/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
function SacarResto()
{
	var numero1;
	var numero2;
	var resto;

	numero1= numeroDividendo.value;
	numero2=numeroDivisor.value;

	numero1= parseInt(numero1);
    numero2= parseInt(numero2);
    resto= numero1 + numero2;
    alert( "el resto es" + resto + ".");

}
