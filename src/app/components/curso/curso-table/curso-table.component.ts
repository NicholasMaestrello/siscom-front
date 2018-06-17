import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { CursoService } from '../service/curso-service.service';
import { CursoDTO } from '../../../model/curso.model';

@Component({
  selector: 'app-curso-table',
  templateUrl: './curso-table.component.html',
  styleUrls: ['./curso-table.component.css']
})
export class CursoTableComponent implements OnInit {
  @Output() onEditCurso = new EventEmitter<CursoDTO>();
  cursos: CursoDTO[] = [];

  cols = [
    { field: 'id', header: 'ID' },
    { field: 'modalidade.nome', header: 'Modalidade' },
    { field: 'responsavel', header: 'Responsavel' },
    { field: 'nivel', header: 'Nível' },
    { field: 'quantidadeAlunos', header: 'Quantidade de Alunos' }

    // { field: row => this.exibirData(row), header: 'Data de Matricula' },
    // { field: row => this.exibirData(row), header: 'Vencimento da Matricula' }
  ];

  constructor(private cursoService: CursoService) { }

  ngOnInit() {
    this.getCursos();
  }

  getCursos() {
    this.cursoService.getCursos().subscribe(
      cursos => this.cursos = cursos,
      err => window.alert(err.error.message)
    );
  }

  editCurso(curso: CursoDTO) {
    this.onEditCurso.emit(Object.assign({}, curso));
  }

  excluirCurso(curso: CursoDTO) {
    const result = window.confirm("Deseja mesmo excluir esse curso ? Essa ação ira resultar diretamente nas matriculas dos alunos");
    if (result)
      this.cursoService.excluirCurso(curso.id).subscribe(
        res => {
          window.alert('Curso excluido com sucesso !');
          this.getCursos()
        },
        err => {
          if (err.status != 401)
          window.alert("Erro inesperado no servidor")
        }
      )
  }
}
