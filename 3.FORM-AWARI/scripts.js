var form = document.getElementById("contact-form");

// criacao de evento para evitar reload da pagina - evitando perda de dados
function handleSubmit(event) {
    event.preventDefault();

    var nome = form.elements["nome"].value;
    var email = form.elements["email"].value;
    var mensagem = form.elements["mensagem"].value;

    //var resultado = "Nome: " + nome + "\n E-mail: " + email + "\n Mensagem: " + mensagem;
    var resultado = `Nome: ${nome} \n E-mail: ${email} \n Mensagem: ${mensagem}`;

    //console.log(nome, email, mensagem);
    console.log(resultado);

    alert(resultado);

}

form.addEventListener("submit", handleSubmit);