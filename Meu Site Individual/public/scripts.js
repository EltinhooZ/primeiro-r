// carregamento

var i = setInterval(function() {

    clearInterval(i);


    document.getElementById("loading").style.display = "none";
    document.getElementById("conteudo").style.display = "inline";
}, 1000);


// Sidebar
function CloseNav() {
    document.getElementById("mysidebar").style.width = "0";
    document.getElementById("mysidebar").style.borderRight = "0";
    document.getElementById("main").style.marginLeft = "7.5%";
}

function OpenNav() {
    document.getElementById("mysidebar").style.width = "250px";
    document.getElementById("mysidebar").style.borderRight = "black 5px solid";
    document.getElementById("main").style.marginLeft = "300px";
}

// Login


function abrir() {
    var email = localStorage.getItem('login');
    if (!email) {
        document.getElementById("login").style.display = "block";
        document.getElementById("main").style.display = 'none';
        document.getElementById("redesSociais").style.display = 'none';
    } else {
        document.getElementById("notificacao-logado").style.display = 'block';

        var a = setInterval(function() {
            clearInterval(a);

            document.getElementById("notificacao-logado").style.display = 'none';

        }, 3000);
    }

}

function Close() {
    document.getElementById("login").style.display = "none";
    document.getElementById("main").style.display = 'block';
    document.getElementById("redesSociais").style.display = 'block';
}


function aguardar() {
    btn_entrar.disabled = true;
    div_erro.style.display = 'none';

}

function finalizar_aguardar() {
    btn_entrar.disabled = false;
    div_erro.style.display = 'block';
    div_erro.innerHTML = '*Email ou senha Inválidos';
}

function teste() {
    var email = localStorage.getItem('login');
    if (email) {
        document.getElementById("logando").style.display = 'block';
        document.getElementById("b_usuario").innerHTML = email;
    }
}