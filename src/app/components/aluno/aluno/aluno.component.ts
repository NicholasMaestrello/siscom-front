import { Component, OnInit } from '@angular/core';

import {AlunoDTO} from '../../../model/alunos.model'

@Component({
  selector: 'app-aluno',
  templateUrl: './aluno.component.html',
  styleUrls: ['./aluno.component.css']
})
export class AlunoComponent implements OnInit {

  form = false;
  aluno: AlunoDTO;

  constructor() { }

  ngOnInit() {
  }

  onEditAluno(aluno:AlunoDTO){
    this.aluno = aluno;
    this.form = true;
  }

  newAluno(){
    this.aluno = new AlunoDTO();
    this.form = true;
  }
}
