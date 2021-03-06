import { Injectable } from '@angular/core';
import { HttpService } from '../../../shared/services/http.service';
import { AlunoDTO } from '../../../model/aluno.model';
import { Observable } from 'rxjs/Observable';
import { CursoDTO } from '../../../model/curso.model';

@Injectable()
export class AlunoService {
  private url = 'api/aluno';

  constructor(private http: HttpService) { }

  getAlunos(): Observable<AlunoDTO[]>{
    return this.http.find<AlunoDTO[]>(this.url);
  }

  postAluno(aluno: AlunoDTO): Observable<AlunoDTO> {
    return this.http.post<AlunoDTO>(this.url, aluno);
  }

  putAluno(aluno: AlunoDTO): Observable<AlunoDTO> {
    return this.http.put<AlunoDTO>(this.url, aluno);
  }

  deleteAluno(idAluno: number): Observable<any> {
    return this.http.delete<any>(this.url, String(idAluno));
  }
}
