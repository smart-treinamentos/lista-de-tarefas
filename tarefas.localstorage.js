const TAREFAS_STORAGE = "Lista-de-Tarefas";

function serializarLocalStorage(listaDeTarefas) {
    localStorage.setItem(TAREFAS_STORAGE, JSON.stringify(listaDeTarefas));
}

function deserializarLocalStorage() {
    let listaDeTarefas = localStorage.getItem(TAREFAS_STORAGE);
    return (listaDeTarefas != undefined) ? JSON.parse(listaDeTarefas) : [];
}