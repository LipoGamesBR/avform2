const form = document.getElementById('form');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const nome = document.getElementById('nome').value;
    const login = document.getElementById('login').value;
    const senha = document.getElementById('senha').value;
    const repetesenha = document.getElementById('repetesenha').value;


    if(nome.length < 10){
        alert('Nome inválido');

    }else if(login.length === 5){
        alert('Login inválido');

    }else if(senha.length !== 8){
        alert('Senha inválida, a mesma deve ter exatamente 8 caracteres');

    }else if(repetesenha !== senha){
        alert('Senhas não conferem');

    }else{
        alert('Formulário enviado com sucesso, redirecionando para a página da Unisuam');
        window.location.href = 'https://www.unisuam.edu.br/';
    }
});