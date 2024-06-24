document.getElementById('formulario').addEventListener('submit', function(event) {
    event.preventDefault();

    var inputs = event.target.querySelectorAll('input');
    var errorMessageDiv = document.getElementById('error-message');
    var errorMessages = [];

    var senha = document.getElementById('senha');
    var confirmarSenha = document.getElementById('confirmarSenha');

    if (senha.value !== confirmarSenha.value) {
        errorMessages.push('As senhas não conferem.');
    }

    inputs.forEach(function(input) {
        if (!input.validity.valid) {
            errorMessages.push(input.title);
        }
    });

    if (errorMessages.length > 0) {
        event.preventDefault();
        errorMessageDiv.innerHTML = 'Por favor, corrija os seguintes erros:<br>' + errorMessages.join('<br>');
    } else {
        errorMessageDiv.innerHTML = '';
    }
});

function applyMask(element, maskFunction) {
    element.addEventListener('input', function() {
        element.value = maskFunction(element.value);
    });
}

function cpfMask(value) {
    return value
        .replace(/\D/g, '')
        .replace(/(\d{3})(\d)/, '$1.$2')
        .replace(/(\d{3})(\d)/, '$1.$2')
        .replace(/(\d{3})(\d{2})$/, '$1-$2')
        .substring(0, 14);  // Limita ao tamanho máximo do CPF
}

function cellphoneMask(value) {

    return value
        .replace(/^(\d{2})(\d)/, '+55($1)$2')
        .replace(/(\d{5})(\d)/, '$1-$2')
        .substring(0, 17);
}

function landlineMask(value) {
    return value
        .replace(/^(\d{2})(\d)/, '+55($1)$2')
        .replace(/(\d{4})(\d)/, '$1-$2')
        .substring(0, 16);
}

applyMask(document.getElementById('cpf'), cpfMask);
applyMask(document.getElementById('celular'), cellphoneMask);
applyMask(document.getElementById('telefone'), landlineMask);