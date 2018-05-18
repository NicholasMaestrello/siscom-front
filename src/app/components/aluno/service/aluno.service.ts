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

  postAluno(aluno: AlunoDTO): Observable<any> {
    return this.http.post<any>(this.url, aluno);
  }

  getCursos(): Observable<CursoDTO[]>{
    return this.http.find<CursoDTO[]>('http://localhost:8020/api/curso');
  }
}
