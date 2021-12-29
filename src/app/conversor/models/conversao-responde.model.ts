export class ConversaoResponse {

    constructor(

        public base: string,
        public date: string,
        public rates: any) { }
}
/* {"base":"USD"} Moeda que está utilizando como referencia.
    "date":""2017-03-08" Data da consulta realizada.
    "rates":{"BRL":3.1405} Retorna oque consultamos.
*/
