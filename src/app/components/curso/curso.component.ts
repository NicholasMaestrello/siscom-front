import { Component, OnInit } from '@angular/core';
import { CursoDTO } from '../../model/curso.model';

@Component({
  selector: 'app-curso',
  templateUrl: './curso.component.html',
  styleUrls: ['./curso.component.css']
})
export class CursoComponent implements OnInit {
  showForm = false;

  cursoSelected: CursoDTO;

  constructor() { }

  ngOnInit() {
  }

  novoCurso() {
    this.cursoSelected = new CursoDTO();
    this.showForm = true;
  }

  onEditCurso(curso: CursoDTO) {
    this.cursoSelected = curso;
    this.showForm = true;
  }

  onCancelar(res: boolean) {
    this.showForm = false;
    this.cursoSelected = undefined;
  }
}
