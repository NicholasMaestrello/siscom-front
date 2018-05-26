import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { AlunoDTO } from '../../../model/aluno.model'

import * as moment from 'moment';

@Component({
  selector: 'app-aluno-table',
  templateUrl: './aluno-table.component.html',
  styleUrls: ['./aluno-table.component.css']
})
export class AlunoTableComponent implements OnInit {
  @Output() onEditAluno = new EventEmitter<AlunoDTO>();
  @Output() onExcluirAluno = new EventEmitter<AlunoDTO>();
  @Input() alunos: AlunoDTO[] = [];

  cols = [
    { field: 'id', header: 'ID' },
    { field: 'nome', header: 'Nome' },
    { field: 'cpf', header: 'CPF' },
    { field: 'tel', header: 'Tel' },
    { field: 'dataEnt', header: 'Data de Matricula' },
    { field: 'dataVenc', header: 'Vencimento da Matricula' }

    // { field: row => this.exibirData(row), header: 'Data de Matricula' },
    // { field: row => this.exibirData(row), header: 'Vencimento da Matricula' }
  ];

  constructor() { }

  ngOnInit() {
  }

  editAluno(aluno: AlunoDTO) {
    this.onEditAluno.emit(Object.assign({}, aluno));
  }

  excluirAluno(aluno: AlunoDTO) {
    this.onExcluirAluno.emit(aluno);
  }

  exibirData(data: Date): string {
    return moment(data).format('dd/MM/yyyy');
  }

  totalRegistros() {
    return this.alunos ? this.alunos.length : 0;
  }
}
