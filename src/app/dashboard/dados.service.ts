import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DadosService {

  readonly dados = [
    //readonly =  Será final, e não poderá ser alterado.
    ['Janeiro', 33],
    ['Fevereiro', 68],
    ['Março', 49],
    ['Abril', 15],
    ['Maio', 80],
    ['Junho', 27],
  ]
  constructor() { }

  /**
   * Retorna um Observable contendo os dados a serem
   * exibidos no gráfico.
   * 
   * @return Observable<any>
   */
  obterDados(): Observable<any> {
    return new Observable(observable => {
      observable.next(this.dados);
      /*next = Notifica todos os inscritos no observable, que
      estão na escuta.*/
      observable.complete();
    });
  }
}
