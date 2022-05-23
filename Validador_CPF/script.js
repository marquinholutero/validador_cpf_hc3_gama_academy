console.log('JavaScript carregado');

function validaCPF(cpf){
    console.log(cpf.length);
if(cpf.length != 11){
    return false;
}else{
    
    var numeros =  cpf.substring(0, 9);
    var digitos =  cpf.substring(9);
    console.log("numeros do CPF " + numeros);
    console.log("digitos do CPF " + digitos);
}
return true;
}

function validacao(){
    console.log('Iniciando validação CPF');
   var cpf =  document.getElementById('cpf_digitado').value

   var resultadoValidacao = validaCPF(cpf);
   
   if (resultadoValidacao){

    document.getElementById('success').style.display = 'block';
   }
   else{
       document.getElementById('error').style.display =  'block';
   }
}