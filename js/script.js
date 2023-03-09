//efeito do botão voltar ao Topo

function Topo(){
    window.scrollTo(
        {
            top:0,
            left:0,
            behavior:"smooth"
        }
    )
}



//Validação de Login

function Login(){
    var logado = o;
    var usuario = document.getElementById("usuario").value;
    var senhs = document.getElementById("senha").value;

    if(usuario== 'adm' && senha == '123456'){
        window.location="index.html"
        logado = 1;
    }
    if(logado==0){
        alert("acesso negado. dados incorretos");
    }

}


//Ativar alert no botão cadastrar
