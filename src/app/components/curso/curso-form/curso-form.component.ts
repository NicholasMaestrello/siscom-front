import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CursoDTO } from '../../../model/curso.model';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CursoService } from '../service/curso-service.service';
import { ModalidadeService } from '../../modalidade/service/modalidade-service.service';
import { ModalidadeDTO } from '../../../model/modalidade.model';
import { HttpService } from '../../../shared/services/http.service';

@Component({
  selector: 'app-curso-form',
  templateUrl: './curso-form.component.html',
  styleUrls: ['./curso-form.component.css']
})
export class CursoFormComponent implements OnInit {
  @Input() curso: CursoDTO;
  @Output() onCancelar = new EventEmitter<boolean>();

  cursoForm: FormGroup;

  modalidades: ModalidadeDTO[];

  niveis = ['Avançado', 'Intermediario', 'Iniciante'];

  constructor(private cursoService: CursoService, private modalidadeService: ModalidadeService) { }

  ngOnInit() {
    this.getModalidades();
    this.createForm();
  }

  getModalidades() {
    this.modalidadeService.getModalidades().subscribe(
      modalidades => this.modalidades = modalidades,
      err => window.alert(err.error)
    );
  }

  createForm() {
    this.cursoForm = new FormGroup({
      'responsavel': new FormControl(
        this.curso.responsavel,
        [
          Validators.required,
          Validators.maxLength(50)
        ]),
      'nivel': new FormControl(
        this.curso.nivel, [
          Validators.required,
          Validators.maxLength(50)
        ]),
      'modalidade': new FormControl(
        this.curso.modalidade, [
          Validators.required
        ])
    });
  }

  get responsavel() {
    return this.cursoForm.get('responsavel')
  }

  get nivel() {
    return this.cursoForm.get('nivel')
  }

  get modalidade() {
    return this.cursoForm.get('modalidade')
  }

  save() {
    if (this.curso && this.curso.id > 0)
      this.alterarCurso();
    else
      this.incluirCurso();
  }

  incluirCurso() {
    this.cursoService.incluirCurso(this.curso).subscribe(
      res => {
        window.alert('Curso cadastrado com sucesso !');
        this.cancelar();
      },
      err => window.alert(err.error.message)
    );
  }

  alterarCurso() {

    this.cursoService.alterarCurso(this.curso).subscribe(
      res => {
        window.alert('Curso alterado com sucesso !');
        this.cancelar();
      },
      err => window.alert(err.error.message)
    );
  }

  cancelar() {
    this.onCancelar.emit(true);
  }

}
