import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxMaskModule } from '../shared/ngx-mask';

import { FileUploadModule } from 'ng2-file-upload';
import { RoutingModule } from './areaParticipante.routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RoutingModule,
    ReactiveFormsModule,
    FileUploadModule,     
    SharedModule,
    NgbModule,
    NgxMaskModule.forRoot(),
  ],
  declarations: [],
  entryComponents: []
  
  
})
export class ToDoModule { }



