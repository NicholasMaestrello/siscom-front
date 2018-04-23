import { Component, OnInit, Output, EventEmitter } from '@angular/core';
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

  alunos: AlunoDTO[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getConfig().subscribe(
      data => this.alunos = data,
      err => console.log("erro na requisiçaõ")
    )
  }

  getConfig(){
    return this.http.get<AlunoDTO[]>('http://localhost:8020/api/aluno');
  }

  editAluno(aluno: AlunoDTO){
    console.log("Editar esse aluno")
    console.log(aluno)
    this.onEditAluno.emit(aluno);
    
  }
}
