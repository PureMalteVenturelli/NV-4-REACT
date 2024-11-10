import { Injectable } from '@angular/core';
import { Livro } from './livro';

@Injectable({
  providedIn: 'root'
})
export class ControleLivrosService {
  private livros: Array<Livro> = [
    { codigo: 1, codEditora: 1, titulo: 'Dom Casmurro', resumo: 'O romance conta a história de Bento Santiago, um jovem que se apaixona por Capitu, sua vizinha de infância. A narrativa é contada por Bento, que reflete sobre seu amor e as possíveis infidelidades de Capitu, levando a uma trama cheia de mistério e suspeitas.', autores: ['Machado de Assis'] },
    { codigo: 2, codEditora: 2, titulo: 'O Segundo Sexo', resumo: 'Este livro é uma análise profunda da condição feminina na sociedade. Beauvoir explora as maneiras pelas quais as mulheres são marginalizadas e exploradas, e argumenta que a emancipação feminina é essencial para a liberdade individual e coletiva', autores: ['Simone de Beauvoir'] },
    { codigo: 3, codEditora: 3, titulo: 'O Crime do Padre Amaro', resumo: 'A trama gira em torno do Padre Amaro, um jovem seminarista que se apaixona por uma mulher casada, Amélia. A relação amorosa entre eles leva a uma série de eventos trágicos e revela a hipocrisia e a corrupção dentro da igreja e da sociedade portuguesa.', autores: ['Eça de Queirós'] },
    { codigo: 3, codEditora: 3, titulo: 'O Morro dos Ventos Uivantes', resumo: 'O Morro dos Ventos Uivantes narra a paixão turbulenta entre Heathcliff e Catherine Earnshaw, marcada por vingança e obsessão, impactando gerações.', autores: ['Emily Brontë'] }

  ];

  obterLivros(): Array<Livro> {
    return this.livros;
  }

  incluir(livro: Livro): void {
    const novoCodigo = Math.max(...this.livros.map(l => l.codigo)) + 1;
    livro.codigo = novoCodigo;
    this.livros.push(livro);
  }

  excluir(codigo: number): void {
    const indice = this.livros.findIndex(livro => livro.codigo === codigo);
    if (indice !== -1) {
      this.livros.splice(indice, 1);
    }
  }
}
