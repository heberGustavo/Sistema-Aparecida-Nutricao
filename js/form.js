function adicionarPaciente() {
    var botao = document.querySelector('#adicionar-paciente');

    botao.addEventListener('click', function (event) {
        event.preventDefault();

        var form = document.querySelector('#formularioPaciente');

        var paciente = obterInformacoesDoForm(form);

        var erros = validaPaciente(paciente);
        if (erros.length > 0) {
            exibeMensagensDeErro(erros);
            return;
        }

        adicionaPacienteNaTabela(paciente);
        //Limpar Formulario
        form.reset();

        //Limpa mensagens de erro 
        var ul = document.querySelector('#mensagens-erros');
        ul.innerHTML = '';

    })
}

function adicionaPacienteNaTabela(paciente){
    var tabela = document.querySelector('#tabela-pacientes');

    var pacienteTr = montaTR(paciente);
    tabela.appendChild(pacienteTr);
}

function exibeMensagensDeErro(arrayErros) {
    var ul = document.querySelector('#mensagens-erros');

    ul.innerHTML = '';

    for (var i = 0; i < arrayErros.length; i++) {
        var li = document.createElement('li');
        li.textContent = arrayErros[i];
        li.classList.add('mensagem-erro');
        ul.appendChild(li);
    }
}

function obterInformacoesDoForm(form) {

    var paciente = {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calcularIMC(form.peso.value, form.altura.value)
    }

    return paciente;
}

function montaTR(paciente) {
    var pacienteTr = document.createElement('tr');

    //Preenche tabela TR´s
    pacienteTr.appendChild(montaTd(paciente.nome, 'info-nome'));
    pacienteTr.appendChild(montaTd(paciente.peso, 'info-peso'));
    pacienteTr.appendChild(montaTd(paciente.altura, 'info-altura'));
    pacienteTr.appendChild(montaTd(paciente.gordura, 'info-gordura'));
    pacienteTr.appendChild(montaTd(paciente.imc, 'info-imc'));
    pacienteTr.classList.add('paciente');

    return pacienteTr;
}

function montaTd(conteudo, classe) {
    var td = document.createElement('td');
    td.textContent = conteudo;
    td.classList.add(classe);

    return td;
}

function validaPaciente(paciente) {

    var arrayErros = [];

    //Verifica campos em branco
    if (paciente.nome.length == 0) {
        arrayErros.push('Preencha o campo nome!');
    }

    if (paciente.peso.length == 0) {
        arrayErros.push('Preencha o campo peso!');
    }

    if (paciente.altura.length == 0) {
        arrayErros.push('Preencha o campo altura!');
    }

    if (paciente.gordura.length == 0) {
        arrayErros.push('Preencha o campo porcentagem de gordura!');
    }

    //Verifica dados
    if (!validaPeso(paciente.peso)) {
        arrayErros.push('Peso inválido!');
    }

    if (!validaAltura(paciente.altura)) {
        arrayErros.push('Altura inválida!');
    }

    return arrayErros;
}

adicionarPaciente();