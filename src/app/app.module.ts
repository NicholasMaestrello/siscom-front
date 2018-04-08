import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import {AppRoutingModule} from './router/app-routing/app-routing.module'


import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { AlunoComponent } from './components/aluno/aluno/aluno.component';
import { AlunoTableComponent } from './components/aluno/aluno-table/aluno-table.component';
import { AlunoFormComponent } from './components/aluno/aluno-form/aluno-form.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HomeComponent } from './components/home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AlunoComponent,
    AlunoTableComponent,
    AlunoFormComponent,
    FooterComponent,
    NavbarComponent,
    DashboardComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
