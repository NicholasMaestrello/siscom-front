import { Component, OnInit, Input, Inject, Output, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgModel, FormGroup, FormBuilder } from '@angular/forms';

import {AlunoDTO} from '../../../model/aluno.model';
import { CursoDTO } from '../../../model/curso.model';
import { HttpService } from '../../../shared/http.service';
@Component({
  selector: 'app-aluno-form',
  templateUrl: './aluno-form.component.html',
  styleUrls: ['./aluno-form.component.css']
})
export class AlunoFormComponent implements OnInit {

  @Input() aluno : AlunoDTO;
  @Output() onCancelar = new EventEmitter<boolean>();
  cursos: CursoDTO[];

  alunoForm: FormGroup;
  constructor(private httpService: HttpService, private http: HttpClient,
    @Inject(FormBuilder) fb: FormBuilder) { 
      this.alunoForm = fb.group({});
    }

  ngOnInit() {
    this.getCursos().subscribe(
      data => this.cursos = data,
      error => console.log(error)
    )
  }

  getCursos(){
    return this.http.get<CursoDTO[]>('http://localhost:8020/api/curso');
  }

  save(){
    console.log(this.aluno);
  }

  cancelar(){
    this.onCancelar.emit(true);
  }
}
