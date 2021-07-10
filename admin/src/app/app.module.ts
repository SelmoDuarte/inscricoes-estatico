import { NgxMaskModule } from './shared/ngx-mask/ngx-mask.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AuthGuard } from './guards/auth.guard';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AppRoutingModule } from './app.routing.module';
import { AuthService } from './login/auth.service';
import { PaginaNaoEncontradaComponent } from './pagina-nao-encontrada/pagina-nao-encontrada.component';
import { HeaderComponent } from './header/header.component';
import { HttpClientModule } from '@angular/common/http';
import { RegistroPfGuard } from './guards/registroPf.guard';
import { EstudanteGuard } from './guards/estudante.guard';
import { FileSelectDirective, FileUploadModule } from 'ng2-file-upload';
import { ModalAcessoNegadoComponent } from './modal-acessoNegado/modal-acessoNegado.component';
import { UsuarioComponent } from './usuario/usuario.component';
import { AreaParticipanteComponent } from './areaParticipante/areaParticipante.component';
import { InscricoesComponent } from './inscricoes/inscricoes.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    UsuarioComponent,
    AreaParticipanteComponent,
    InscricoesComponent,
    PaginaNaoEncontradaComponent,
    HeaderComponent,
    ModalAcessoNegadoComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FileUploadModule, 
    NgbModule,
    NgxMaskModule.forRoot(),    
    ],
    entryComponents: [ModalAcessoNegadoComponent],
  providers: [
    AuthService, 
    AuthGuard,
    RegistroPfGuard,
    EstudanteGuard    
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }


