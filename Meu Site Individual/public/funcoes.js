let login_usuario;
let nome_usuario;

function redirecionar_login() {
    window.location.href = 'Home.html';
}

function verificar_autenticacao() {
    // login_usuario = sessionStorage.login_usuario_meuapp;
    // nome_usuario = sessionStorage.nome_usuario_meuapp;
    login_usuario = localStorage.getItem('login');

    if (login_usuario == undefined) {
        redirecionar_login();
    } else {
        b_usuario.innerHTML = login_usuario;
        validar_sessao();
    }

}

function logoff() {
    finalizar_sessao();
    localStorage.clear();
    redirecionar_login();
}

function validar_sessao() {
    fetch(`/usuarios/sessao/${login_usuario}`, { cache: 'no-store' })
        .then(resposta => {
            if (resposta.ok) {
                resposta.text().then(texto => {
                    console.log('Sessão :) ', texto);
                });
            } else {
                console.error('Sessão :.( ');
                logoff();
            }
        });
}

function finalizar_sessao() {
    fetch(`/usuarios/sair/${login_usuario}`, { cache: 'no-store' });
}