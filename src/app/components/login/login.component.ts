import { Component, OnInit } from '@angular/core';
import { LoginService } from './service/login.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { LoginDTO } from '../../model/login.model';
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  login: LoginDTO

  constructor(private loginService: LoginService, private router: Router) { }

  ngOnInit() {
    this.createLoginObj();
    this.createForm();
  }

  logar() {
    this.loginService.doLogin(this.login).subscribe(
      res => this.loginSucesso(res),
      err => console.log(err)
    );
  }

  createLoginObj() {
    this.login = new LoginDTO();
  }

  createForm() {
    this.loginForm = new FormGroup({
      'id': new FormControl(
        this.login.id, [
          Validators.required
        ]),
      'password': new FormControl(
        this.login.password, [
          Validators.required
        ]
      ),
    });
  }

  loginSucesso(res: any) {
    console.log(res);
    localStorage.setItem('user', res.resposta);
    this.router.navigate(['/dashboard/home']);
  }
}
