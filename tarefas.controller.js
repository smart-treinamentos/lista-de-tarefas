function modalNovaTarefa() {
    $("#modal-titulo").html("Criar Nova Tarefa");
    $("#modal-tarefas").modal("toggle");
}

$(document).ready(function () {
    $("#staging-area").load("tarefas-template.html");
});