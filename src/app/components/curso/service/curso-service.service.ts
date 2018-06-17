import { Injectable } from '@angular/core';
import { HttpService } from '../../../shared/services/http.service';
import { Observable } from 'rxjs/Observable';
import { CursoDTO } from '../../../model/curso.model';

@Injectable()
export class CursoService {
  private url = 'api/curso';

  constructor(private http: HttpService) { }

  getCursos(): Observable<CursoDTO[]>{
    return this.http.find<CursoDTO[]>(this.url);
  }

  incluirCurso(curso: CursoDTO): Observable<CursoDTO> {
    return this.http.post<CursoDTO>(this.url, curso);
  }

  alterarCurso(curso: CursoDTO): Observable<CursoDTO> {
    return this.http.put<CursoDTO>(this.url, curso);
  }

  excluirCurso(idCurso: number): Observable<any> {
    return this.http.delete<any>(this.url, String(idCurso));
  }
}
