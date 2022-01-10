function resetFormulario() {
    document.forms[0].reset();
}

function obterDadosTarefa() {
    return {
        id: $("#tarefa-id").val(),
        titulo: $("#tarefa-titulo").val(),
        descricao: $("#tarefa-descricao").val(),
        concluida: $("#tarefa-concluida").is(":checked"),
        tag: {
            id: $("#tarefa-tag").val(),
            descricao: $("#tarefa-tag option:selected").text()
        }
    };    
}