import { Component, OnInit } from '@angular/core';
import { ModalidadeService } from './service/modalidade-service.service';
import { ModalidadeDTO } from '../../model/modalidade.model';
import { FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-modalidade',
  templateUrl: './modalidade.component.html',
  styleUrls: ['./modalidade.component.css']
})
export class ModalidadeComponent implements OnInit {
  modalidades: ModalidadeDTO[];

  modalidade: ModalidadeDTO = new ModalidadeDTO();

  modalidadeForm: FormGroup;

  cols = [
    { field: 'id', header: 'ID' },
    { field: 'nome', header: 'Nome' }
  ];

  constructor(private modalidadeService: ModalidadeService) { }

  ngOnInit() {
    this.getModalidades();
    this.createForm();
  }

  getModalidades() {
    this.modalidadeService.getModalidades().subscribe(
      modalidades => this.modalidades = modalidades,
      err => window.alert(err.error.message)
    );
  }

  createForm() {
    this.modalidadeForm = new FormGroup({
      'nome': new FormControl(
        this.modalidade.nome,
        [
          Validators.required,
          Validators.maxLength(50)
        ])
    });
  }

  get nome() {
    return this.modalidadeForm.get('nome');
  }

  save() {
    if (this.modalidade && this.modalidade.id > 0)
      this.alterararModalidade();
    else
      this.incluirModalidade();
  }

  incluirModalidade() {
    this.modalidadeService.incluirModalidade(this.modalidade).subscribe(
      modalidade => {
        window.alert('Modalidade incluida com sucesso');
        this.getModalidades();
        this.modalidade.nome = "";
      },
      err => {
        if (err.status != 401)
          window.alert("Erro inesperado no servidor")
      }
    );
  }

  alterararModalidade() {
    this.modalidadeService.alterarModalidade(this.modalidade).subscribe(
      res => {
        window.alert('Modalidade alterada com sucesso');
        this.getModalidades();
        this.modalidade.nome = "";
      }
      err => {
        if (err.status != 401)
          window.alert("Erro inesperado no servidor")
      }
    );
  }

  excluirModalidade(modalidade: ModalidadeDTO) {
    const result = window.confirm("Deseja mesmo excluir essa modalidade ? Essa ação ira resultar diretamente nas matriculas dos alunos e nos cursos cadastrados");
    if (result)
      this.modalidadeService.excluirModalidade(modalidade.id).subscribe(
        res => {
          window.alert('Modalidade Excluida Com sucesso !');
          this.getModalidades();
        },
        err => {
          if (err.status != 401)
            window.alert("Erro inesperado no servidor")
        }
      )
  }

}
