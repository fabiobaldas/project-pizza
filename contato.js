function Enviar() {
 
    var nome = document.getElementById("nomeid");
 
    if ((nome.value != "")&&(email.value != "")) {
        alert('Obrigado Sr(a), ' + nome.value + ' os seus dados foram encaminhados com sucesso');
    }
 
}