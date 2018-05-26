import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { AppRoutingModule } from './router/app-routing/app-routing.module'
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { AlunoComponent } from './components/aluno/aluno/aluno.component';
import { AlunoTableComponent } from './components/aluno/aluno-table/aluno-table.component';
import { AlunoFormComponent } from './components/aluno/aluno-form/aluno-form.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HomeComponent } from './components/home/home.component';
import { NotFoundComponent } from './shared/component/not-found/not-found.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { CommonModule } from '@angular/common';
import { HttpService } from './shared/services/http.service';
import { LoginService } from './components/login/service/login.service';
import { AlunoService } from './components/aluno/service/aluno.service';
import { AuthFilterService } from './shared/services/authfilter.service';
import { FilterRequisitionService } from './shared/services/filter.requisition.service';
import { ModalComponent } from './shared/component/modal/modal.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TableModule } from 'primeng/table';
import { PaginatorModule } from 'primeng/paginator';


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
    HomeComponent,
    NotFoundComponent,
    ModalComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    TableModule,
    BrowserAnimationsModule,
    PaginatorModule,
    NgbModule.forRoot()
  ],
  providers: [HttpService,
    LoginService,
    AlunoService,
    AuthFilterService,
    { provide: HTTP_INTERCEPTORS, useClass: FilterRequisitionService, multi: true }
  ],
  bootstrap: [AppComponent],
  entryComponents: [
    ModalComponent
  ]
})
export class AppModule { }
