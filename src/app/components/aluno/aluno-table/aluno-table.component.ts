import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs/Observable';

import {AlunoDTO} from '../../../model/aluno.model'

@Component({
  selector: 'app-aluno-table',
  templateUrl: './aluno-table.component.html',
  styleUrls: ['./aluno-table.component.css']
})
export class AlunoTableComponent implements OnInit {
  @Output() onEditAluno = new EventEmitter<AlunoDTO>();
  @Output() onExcluirAluno = new EventEmitter<AlunoDTO>();
  @Input()alunos: AlunoDTO[] = [];

  constructor() { }

  ngOnInit() {
  }

  editAluno(aluno: AlunoDTO){
    this.onEditAluno.emit(Object.assign({}, aluno));
  }

  excluirAluno(aluno: AlunoDTO){
    this.onExcluirAluno.emit(aluno);
  }
}
