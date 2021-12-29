/**
 * Serviço responsável por executar as operações
da calculadora

@author Jaqueline Camilo Dias
@since 1.0.0
 */

import { Injectable } from '@angular/core';
import { __param } from 'tslib';

@Injectable({
  providedIn: 'root'
})
export class CalculadoraService {
  /*
  Define as contantes utilizadas para identificar
  as operações de cálculo */
  static readonly SOMA: string = '+';
  static readonly SUBTRAÇÃO: string = '-';
  static readonly DIVISAO: string = '/';
  static readonly MULTIPLICACAO: string = '*';
  /*
  readonly = somente leitura
  Letra Maiuscula = É uma constante
  static = facilita acesso aos atributos
  */
  constructor() { }

  /**
   * *Metodo que calcula uma operação matematica dado
  *dois numeros.
  *Suporta as operações soma, subtração, divisão 
  *e multiplicação
  *
  *@param num1 number
  *@param num2 number
  *@param opreação string Operação a ser executada
  *@return number Resultado da operação
   */

  calcular(num1: number, num2: number, operacao: string): number {
    let Resultado: number;//armazena o resultado da operação

    switch (operacao) {
      case CalculadoraService.SOMA:
        Resultado = num1 + num2;
        break;
      case CalculadoraService.SUBTRAÇÃO:
        Resultado = num1 - num2;
        break;
      case CalculadoraService.DIVISAO:
        Resultado = num1 / num2;
        break;
      case CalculadoraService.MULTIPLICACAO:
        Resultado = num1 * num2;
        break;
      default:// Se por acaso recebeu uma operação invalida, retorna 0
        Resultado = 0;
    }
    return Resultado;
  }
}
