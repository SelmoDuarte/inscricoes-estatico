import { PaginaNaoEncontradaComponent } from './pagina-nao-encontrada/pagina-nao-encontrada.component'; 
import { NgModule } from '@angular/core'; 
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './guards/auth.guard';
import { UsuarioComponent } from './usuario/usuario.component';
import { AreaParticipanteComponent } from './areaParticipante/areaParticipante.component';
import { InscricoesComponent } from './inscricoes/inscricoes.component';


const appRoutes: Routes = [
//    {
//        path: 'cursos',
//        loadChildren: 'app/cursos/cursos.module#CursosModule',
//        canActivate: [AuthGuard],
//        canActivateChild: [CursosGuard],
//        canLoad: [AuthGuard]
//    },
//    {
//        path: 'alunos',
//        loadChildren: 'app/alunos/alunos.module#AlunosModule',
//        canActivate: [AuthGuard],
//        canLoad: [AuthGuard]
//    },
      { path: 'login', component: LoginComponent  },
      { path: 'usuario', component: UsuarioComponent  },
      { path: 'areaParticipante', component: AreaParticipanteComponent,  canActivate: [AuthGuard]},
      { path: 'inscricoes', component: InscricoesComponent,  canActivate: [AuthGuard]},
    {
        path: 'home', component: HomeComponent,
//        canActivate: [AuthGuard]
    },
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: '**', component: LoginComponent }, //, canActivate: [AuthGuard]}

];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes, { useHash: true })],
    exports: [RouterModule]
})
export class AppRoutingModule { }

