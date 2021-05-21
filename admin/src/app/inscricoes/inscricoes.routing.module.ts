import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

const moduloRoutes = [];
@NgModule({
    imports: [RouterModule.forChild(moduloRoutes)],
    exports: [RouterModule]
})
export class RoutingModule {}

