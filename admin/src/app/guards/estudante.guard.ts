import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CanActivateChild, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Injectable()
export class EstudanteGuard implements CanActivateChild {

    	canActivateChild(
            route: ActivatedRouteSnapshot,
            state: RouterStateSnapshot
        ): Observable<boolean>|boolean {

            //console.log(route);
            //console.log(state);

            console.log('EstudanteGuard: Guarda de rota filha');

            if (state.url.includes('editar')){
                //alert('Usuário sem acesso');
                //return Observable.of(false);
            }
            

            return true;
        }

}