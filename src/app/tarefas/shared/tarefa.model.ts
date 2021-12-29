export class Tarefa {

    constructor(// ? = esses atributos são opcionais
        public id?: number,
        public nome?: string,
        public concluida?: boolean
    ) { }
}