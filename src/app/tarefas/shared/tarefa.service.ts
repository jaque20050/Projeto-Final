import { Injectable } from '@angular/core';

import { Tarefa } from './';

@Injectable({
  providedIn: 'root'
})
export class TarefaService {

  constructor() { }

  listarTodos(): Tarefa[] {
    const tarefas = localStorage['tarefas'];
    return tarefas ? JSON.parse(tarefas) : [];
    /* Caso tenha tarefas armazenada em meu banco, retorne.
       Caso contrario, retornará um Array vazio.*/
  }
  cadastrar(tarefa: Tarefa): void {
    const tarefas = this.listarTodos();
    tarefa.id = new Date().getTime();
    tarefas.push(tarefa);
    localStorage['tarefas'] = JSON.stringify(tarefas);
    /* Responsável por cadastrar uma nova tarefa.
    Não irá retornar nada, pois somente cadastra no sistema.
    push = adicionar, no final da lista.
    */
  }
  buscarPorId(id: number): Tarefa {
    const tarefas: Tarefa[] = this.listarTodos();
    return tarefas.find(tarefa => tarefa.id === id);
    /*Caso a tarefa que estou procurando, esteja 
    cadastrado, ira me retornar um verdadeiro*/
  }
  atualizar(tarefa: Tarefa): void {
    const tarefas: Tarefa[] = this.listarTodos();
    tarefas.forEach((obj, index, objs) => {
      if (tarefa.id === obj.id) {
        objs[index] = tarefa;
      }
    });
    localStorage['tarefas'] = JSON.stringify(tarefas);
    /* Se o ID da tarefa que estou atualizando, for igual,
    ao ID da tarefa que estou interando, será atualizado.  
    */
  }
  remover(id: number): void {
    let tarefas: Tarefa[] = this.listarTodos();
    tarefas = tarefas.filter(tarefa => tarefa.id !== id);
    localStorage['tarefas'] = JSON.stringify(tarefas);
    /*filter = ira filtrar quando solicitada uma condição para ele.
    Quero que ele filtre e retorne todas as tarefas, na qual o ID
    seja diferente do ID  que quero remover.
    */
  }
  alterarStatus(id: number): void {
    const tarefas: Tarefa[] = this.listarTodos();
    tarefas.forEach((obj, index, objs) => {
      if (id === obj.id) {
        objs[index].concluida = !obj.concluida;
      }
    });
    localStorage['tarefas'] = JSON.stringify(tarefas);
    /*
    Então irá buscar dentro de minhas tarefas, comparar se
    o ID da tarefa concluida e o mesmo que estou buscando,
    e dará o Status concluida a ela.
    ! = inverte o valor Booleano
    */
  }
}

