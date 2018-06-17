import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AlunoDTO } from '../../model/aluno.model';
import { AlunoService } from './service/aluno.service';

import * as moment from 'moment';

@Component({
  selector: 'app-aluno',
  templateUrl: './aluno.component.html',
  styleUrls: ['./aluno.component.css']
})
export class AlunoComponent implements OnInit {
  form = false;
  aluno: AlunoDTO;
  listaAlunos: AlunoDTO[];

  closeResult: string;

  @ViewChild('content') content;
  constructor(private alunoService: AlunoService) { }

  ngOnInit() {
    this.getAlunos();
  }

  getAlunos() {
    this.getUrl().subscribe(
      data => this.listaAlunos = data,
      err => {
        
        console.log(err)
        if (err.status != 401)
          window.alert("Erro inesperado no servidor")
      }
    )
  }

  getUrl() {
    return this.alunoService.getAlunos();
  }

  onEditAluno(aluno: AlunoDTO) {
    this.aluno = aluno;
    this.form = true;
  }

  newAluno() {
    this.aluno = new AlunoDTO();
    this.aluno.dataEnt = moment(new Date()).format('YYYY-MM-DD');
    this.form = true;
  }

  onCancelar(resposta: boolean) {
    this.aluno = undefined;
    this.form = false;
    this.getAlunos();
  }

  onExcluirAluno(aluno: AlunoDTO) {
    const result = window.confirm("Deseja mesmo excluir esse aluno ?");
    if (result)
      this.alunoService.deleteAluno(aluno.id).subscribe(
        res => {
          window.alert('Aluno excluido com sucesso !');
          this.getAlunos();
        },
        err => {
          if (err.status != 401)
            window.alert("Erro inesperado no servidor")
        }
      )
  }

  response(resposta: boolean) {
    console.log(resposta);
  }
}
