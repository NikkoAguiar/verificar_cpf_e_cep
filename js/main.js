$(document).ready(function(){
    $('#campo_telefone').mask('(00) 00000-0000', {
        placeholder: '(51) 99009-0594'
    });

    $('#campo_cpf').mask('000.000.000-00', {
        placeholder: '567.285.123.86'
    });

    $('#campo_cep').mask('00000-000', {
        placeholder: '94410-300'
    })

    $('form').validate({
        rules: {
            campo_nome: {
                required: true
            },
            campo_telefone: {
                required: true
            },
            campo_email: {
                required: true,
                email: true,
            },
            campo_cpf: {
                required: true
            },
            campo_cep: {
                required: true
            }
        },
        messages: {
            campo_nome: 'Favor inserir o nome*',
            campo_telefone: 'Favor inserir telefone*',
            campo_email: 'Favor inserir E-mail*',
            campo_cpf: 'Favor inserir CPF*',
            campo_cep: 'Favor inserir CEP*'
        }
    })



})