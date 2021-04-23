function validar() {

    var nome = document.getElementById("nome");
    var cpf = document.getElementById("cpf");
    var data = document.getElementById("data");
    var sexo = document.getElementById("sexo");
    var email = document.getElementById("email");
    var celular = document.getElementById("celular");
    var nivel = document.getElementById("nivel");


    // verificar se o nome está vazio
    if (nome.value == "") {
        alert("Nome não informado");
        onfocus = "this.style.backgroundColor='#b40000'"
        nome.focus();
        return;
    }
    if (cpf.value == "") {
        alert("CPF não informado");
        onfocus = "this.style.backgroundColor='#b40000'"
        cpf.focus();
        return;
    }
    if (data.value == "") {
        alert("Data não informada");
        onfocus = "this.style.backgroundColor='#b40000'"
        data.focus();
        return;
    }
    if (sexo.value == "") {
        alert("Sexo não informado");
        onfocus = "this.style.backgroundColor='#b40000'"
        sexo.focus();
        return;
    }
    if (email.value == "") {
        alert("Email não informado");
        onfocus = "this.style.backgroundColor='#b40000'"
        email.focus();
        return;
    }
    if (celular.value == "") {
        alert("Celular não informado");
        onfocus = "this.style.backgroundColor='#b40000'"
        celular.focus();
        return;
    }
    if (nivel.value == "") {
        alert("Nível não informado");
        onfocus = "this.style.backgroundColor='#b40000'"
        nivel.focus();
        return;
    }
    if (nome.value, cpf.value, data.value == "") {
        alert("Informe os dados: Nome, CPF e Data");
        onfocus = "this.style.backgroundColor='#b40000'"
        nivel.focus();
        return;
    }

    alert("Formulário enviado!");
    // envia o formulário
    //formulario.submit();
}