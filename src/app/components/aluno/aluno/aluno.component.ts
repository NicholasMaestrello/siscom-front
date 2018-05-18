import { Component, OnInit, ViewChild } from '@angular/core';

import {AlunoDTO} from '../../../model/aluno.model'
import { AlunoTableComponent } from '../aluno-table/aluno-table.component';
import { HttpClient } from '@angular/common/http';
import { AlunoService } from '../service/aluno.service';

@Component({
  selector: 'app-aluno',
  templateUrl: './aluno.component.html',
  styleUrls: ['./aluno.component.css']
})
export class AlunoComponent implements OnInit {
  form = false;
  aluno: AlunoDTO;
  listaAlunos: AlunoDTO[];

  constructor(private alunoService: AlunoService) { }

  ngOnInit() {
    this.getAlunos();
  }

  getAlunos(){
    this.getUrl().subscribe(
      data => this.listaAlunos = data,
      err => console.log(err)
    )
  }

  getUrl(){
    return this.alunoService.getAlunos();
  }

  onEditAluno(aluno:AlunoDTO){
    this.aluno = aluno;
    this.form = true;
  }

  newAluno(){
    this.aluno = new AlunoDTO();
    this.form = true;
  }

  onCancelar(resposta: boolean){
    this.aluno = undefined;
    this.form = false;
    this.getAlunos();
  }
}
