function modalNovaTarefa() {
    $("#modal-titulo").html("Cadastrar Nova Tarefa");
    $("#modal-tarefas").modal({
        onApprove: function() {
            let tarefa = obterDadosTarefa();
            console.log(tarefa);
        }
    });
    $("#modal-tarefas").modal("toggle");
}

$(document).ready(function () {
    $("#staging-area").load("tarefas-template.html");
});