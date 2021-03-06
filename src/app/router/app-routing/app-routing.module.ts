import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from '../../components/login/login.component'
import { DashboardComponent } from '../../components/dashboard/dashboard.component'
import { HomeComponent } from '../../components/home/home.component'
import { NotFoundComponent } from '../../shared/component/not-found/not-found.component';
import { AuthFilterService } from '../../shared/services/authfilter.service';
import { AlunoComponent } from '../../components/aluno/aluno.component';
import { CursoComponent } from '../../components/curso/curso.component';
import { ModalidadeComponent } from '../../components/modalidade/modalidade.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [AuthFilterService],
    runGuardsAndResolvers: 'always',
    children:
      [
        { path: 'home', component: HomeComponent },
        { path: 'aluno', component: AlunoComponent },
        { path: 'curso', component: CursoComponent },
        { path: 'modalidade', component: ModalidadeComponent }
      ]
  },
  { path: 'notfound', canActivate: [AuthFilterService], component: NotFoundComponent, runGuardsAndResolvers: 'always' },
  { path: '', canActivate: [AuthFilterService], redirectTo: '/notfound', pathMatch: 'full', runGuardsAndResolvers: 'always' },
  { path: '**', canActivate: [AuthFilterService], redirectTo: '/notfound', pathMatch: 'full', runGuardsAndResolvers: 'always' }
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})


export class AppRoutingModule { }
