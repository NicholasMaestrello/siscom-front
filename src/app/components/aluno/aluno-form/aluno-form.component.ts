import { Component, OnInit, Input } from '@angular/core';

import {AlunoDTO} from '../../../model/alunos.model';
@Component({
  selector: 'app-aluno-form',
  templateUrl: './aluno-form.component.html',
  styleUrls: ['./aluno-form.component.css']
})
export class AlunoFormComponent implements OnInit {

  @Input() aluno : AlunoDTO;
  constructor() { }

  ngOnInit() {
  }

}
