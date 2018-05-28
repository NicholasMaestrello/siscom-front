import { Component, OnInit, Input, Inject, Output, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgModel, FormGroup, Validator, Validators, FormControl, ValidatorFn, AbstractControl } from '@angular/forms';

import { AlunoDTO } from '../../../model/aluno.model';
import { CursoDTO } from '../../../model/curso.model';
import { AlunoService } from '../service/aluno.service';

import * as moment from 'moment';
import { MaskUtils } from '../../../shared/utils/mask-utils';


@Component({
  selector: 'app-aluno-form',
  templateUrl: './aluno-form.component.html',
  styleUrls: ['./aluno-form.component.css']
})
export class AlunoFormComponent implements OnInit {
  @Input() aluno: AlunoDTO;
  @Output() onCancelar = new EventEmitter<boolean>();

  cursos: CursoDTO[];
  cursosSelecionados: CursoDTO[];

  alunoForm: FormGroup;

  cpfMask = MaskUtils.cpfMask;
  telefoneMask = MaskUtils.telefoneMask;
  celularMask = MaskUtils.celularMask;
  constructor(private http: HttpClient, private alunoService: AlunoService) { }

  ngOnInit() {
    this.createForm();
    this.getCursos().subscribe(
      data => {
        this.cursos = data;
        this.checkCursosMAtriculados();
      },
      err => {
        if (err.status == 401)
          window.alert("Unauthorized")
        else
          window.alert("Erro inesperado no servidor")
      }
    )
  }

  getCursos() {
    return this.http.get<CursoDTO[]>('http://localhost:8020/api/curso');
  }

  save() {
    this.aluno.cursos = this.selecionarCursos();
    if (this.aluno.id && this.aluno.id > 0) {
      this.http.put('http://localhost:8020/api/aluno', this.aluno).subscribe(
        res => {
          window.alert('Matricula alterada com sucesso !');
          this.onCancelar.emit(true);
        },
        err => {
          if (err.status == 401)
            window.alert("Unauthorized")
          else
            window.alert("Erro inesperado no servidor")
          this.onCancelar.emit(true);
        }
      );
    }
    else
      this.alunoService.postAluno(this.aluno).subscribe(
        res => {
          window.alert('Aluno matriculado com sucesso !');
          this.onCancelar.emit(true);
        },
        err => {
          if (err.status == 401)
            window.alert("Unauthorized")
          else
            window.alert("Erro inesperado no servidor")
          this.onCancelar.emit(true);
        }
      );
  }

  cancelar() {
    this.onCancelar.emit(true);
  }

  selecionarCursos() {
    return this.cursos
      .filter(opt => opt.checked)
  }

  checkCursosMAtriculados() {
    if (this.aluno.cursos != undefined && this.aluno.cursos.length > 0)
      this.aluno.cursos.forEach((cursoAluno, indexAluno, arrayAluno) => {
        this.cursos.forEach((valueGeral, indexGeral, arrayGeral) => {
          if (cursoAluno.id == valueGeral.id)
            valueGeral.checked = true;
        })
      })
  }

  get formularioStatus() {
    return this.alunoForm.status;
  }

  createForm() {
    this.alunoForm = new FormGroup({
      'nome': new FormControl(
        { value: this.aluno.nome, disabled: this.aluno.id ? true : false },
        [
          Validators.required,
          Validators.maxLength(50)
        ]),
      'endereco': new FormControl(
        this.aluno.endereco, [
          Validators.required,
          Validators.maxLength(50)
        ]
      ),
      'bairro': new FormControl(
        this.aluno.bairro, [
          Validators.required,
          Validators.maxLength(50)
        ]),
      'cpf': new FormControl(
        { value: this.aluno.cpf, disabled: this.aluno.id ? true : false },
        [
          Validators.required,
          Validators.pattern('^[0-9]{3}\.[0-9]{3}\.[0-9]{3}\-[0-9]{2}$')
        ]),
      'telefone': new FormControl(
        this.aluno.tel, [
          Validators.required,
          Validators.pattern('^[(][0-9]{2}[)] [0-9]{4}\-[0-9]{4}$')
        ]),
      'celular': new FormControl(
        this.aluno.cel, [
          Validators.required,
          Validators.pattern('^[(][0-9]{2}[)] [9]{0,1}[0-9]{4}\-[0-9]{4}$')
        ]),
      'datasGroup': new FormGroup({
        'dtEntrada': new FormControl(
          { value: this.aluno.dataEnt, disabled: this.aluno.id ? true : false },
          [
            Validators.required
          ]
        ),
        'dtVencimento': new FormControl(
          this.aluno.dataVenc, [
            Validators.required
          ]
        )
      }, Validators.compose([this.validateData()]))
    });
  }

  get datasGroup() {
    return this.alunoForm.get('datasGroup');
  }

  get nome() {
    return this.alunoForm.get('nome')
  }

  get endereco() {
    return this.alunoForm.get('endereco')
  }

  get bairro() {
    return this.alunoForm.get('bairro')
  }

  get cpf() {
    return this.alunoForm.get('cpf')
  }

  get telefone() {
    return this.alunoForm.get('telefone')
  }

  get celular() {
    return this.alunoForm.get('celular')
  }

  get dtEntrada() {
    const group = this.datasGroup;
    return group ? group.get('dtEntrada') : null;
  }

  get dtVencimento() {
    const group = this.datasGroup;
    return group ? group.get('dtVencimento') : null;
  }

  validateData(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } => {

      const isValid = moment(this.aluno.dataVenc).isAfter(moment(this.aluno.dataEnt));
      return isValid ? null : { 'dataInvalida': 'Data de vencimento deve ser posterior a de matrícula' }

    };
  }
}
