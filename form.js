var botaoEnviar = document.querySelector("#enviar");

botaoEnviar.addEventListener("click", function(event){
    event.preventDefault();

    //Captura o formulário
    var form = document.querySelector("#frmContato");

    //Verifica se o usuário preencheu e-mail ou telefone
    if(form.email.value=="" && form.telefone.value==""){
        document.getElementById("textoRetorno").innerHTML = "<span style='color: red;'>Preencha pelo menos E-mail ou Telefone para continuar.</span>";
        document.getElementById("formRetorno").style.display = "block";
        return;
    }else {//Obtém o botão do formulário


        //Monta o texto do retorno 
        msgRetorno="<span style='color: white;'>" + form.sobrenome.value + ", agradecemos o seu contatos com a gente! <br><br>Vamos avaliar suas considerações e retornaremos o mais rápido possível."

        //Abre a div de retorno
        document.getElementById("formRetorno").style.display="block";
        //Efetua o retorno
        document.getElementById("textoRetorno").innerHTML=msgRetorno;
        //Fecha o formulário
        document.getElementById("formulario").style.display="none";
        // Botões adicionais
        const botoesExtras = `
        <div style="display: flex; justify-content: center; gap: 20px; flex-wrap: wrap; margin-top: 30px;">
        <button onclick="window.location.href='index.html'" class="btextra">Voltar para a Home</button>
        <button onclick="window.location.href='servicos.html'" class="btextra">Ver Produtos</button>
        </div>
        `;

        document.getElementById("textoRetorno").innerHTML = msgRetorno + botoesExtras;
        return;
    }
})