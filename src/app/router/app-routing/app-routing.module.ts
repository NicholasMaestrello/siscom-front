import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from '../../components/login/login.component'
import { DashboardComponent } from '../../components/dashboard/dashboard.component'
import { HomeComponent } from '../../components/home/home.component'
import { AlunoComponent } from '../../components/aluno/aluno/aluno.component';
import { NotFoundComponent } from '../../shared/component/not-found/not-found.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  {
    path: 'dashboard', component: DashboardComponent, children: 
    [
      { path: 'home', component: HomeComponent },
      { path: 'aluno', component: AlunoComponent }
    ]
  },
  { path: 'notfound', component: NotFoundComponent },
  { path: '', redirectTo: '/notfound', pathMatch: 'full' },
  { path: '**', redirectTo: '/notfound', pathMatch: 'full' }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})


export class AppRoutingModule { }
