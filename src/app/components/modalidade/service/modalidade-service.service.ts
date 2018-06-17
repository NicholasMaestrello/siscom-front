import { Injectable } from '@angular/core';
import { HttpService } from '../../../shared/services/http.service';
import { ModalidadeDTO } from '../../../model/modalidade.model';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ModalidadeService {
  url = 'api/modalidades'

  constructor(private http: HttpService) { }

  getModalidades(): Observable<ModalidadeDTO[]> {
    return this.http.find<ModalidadeDTO[]>(this.url);
  }

  incluirModalidade(modalidade: ModalidadeDTO): Observable<ModalidadeDTO> {
    return this.http.post<ModalidadeDTO>(this.url, modalidade);
  }

  alterarModalidade(modalidade: ModalidadeDTO): Observable<ModalidadeDTO> {
    return this.http.put<ModalidadeDTO>(this.url, modalidade);
  }

  excluirModalidade(id: number): Observable<any> {
    return this.http.delete<any>(this.url, String(id));
  }
}
