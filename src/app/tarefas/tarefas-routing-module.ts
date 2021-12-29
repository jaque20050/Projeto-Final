import { Routes } from "@angular/router";
import { CadastrarTarefaComponent } from "./cadastrar";
import { EditarTarefaComponent } from "./editar";

import { ListarTarefaComponent } from "./listar";

export const TarefaRoutes: Routes = [
    {
        path: 'tarefas',
        redirectTo: 'tarefas/listar'
    },
    {
        path: 'tarefas/listar',
        component: ListarTarefaComponent
        /*
        Quero que ele direncione para ListarTarefaComponent.
        E exibi o conteudo de TarefaComponent.
        */
    },
    {
        path: 'tarefas/cadastrar',
        component: CadastrarTarefaComponent
    },
    {
        path: 'tarefas/editar/:id',
        component: EditarTarefaComponent
    }
];