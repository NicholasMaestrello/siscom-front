import { Component, OnInit } from '@angular/core';
import { LoginService } from './service/login.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { LoginDTO } from '../../model/login.model';
import { Router } from "@angular/router";
import { DefaultResponse } from '../../model/default-response';

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
      err => {
        window.alert(err.error.message);
        this.resetObj();
      }
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

  resetObj() {
    this.login = new LoginDTO();
  }

  loginSucesso(res: DefaultResponse<string>) {
    if (res.data) {
      localStorage.setItem('user', res.data);
      this.router.navigate(['/dashboard/home']);
    }
    else {
      window.alert('Usuario ou senha invalidos !');
      this.resetObj();
    }
  }
}
