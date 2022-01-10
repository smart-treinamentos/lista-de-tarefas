function modalNovaTarefa() {
    $("#modal-titulo").html("Cadastrar Nova Tarefa");
    $("#modal-tarefas").modal({
        onApprove: function() {
            let tarefa = obterDadosTarefa();
            cadastrarTarefa(tarefa);
            resetFormulario();
        }
    });
    $("#modal-tarefas").modal("toggle");
}

function cadastrarTarefa(tarefa) {
    tarefa.id = new Date().getTime();
    cadastrarTarefaLocalStora(tarefa);
}

$(document).ready(function () {
    $("#staging-area").load("tarefas-template.html");
});