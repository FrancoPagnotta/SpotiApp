import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SessionGuard implements CanActivate {

  constructor( private _cookieService: CookieService,
               private _router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.checkCookieSession(); // Esto determina el poder ingresar a una ruta o no. 
  }

  checkCookieSession():boolean {
    try {
      const token = this._cookieService.check('token') // .check retorna true si existe una cookie llamada token, de lo contrario retorna false
      if (token) {
        this._router.navigate(['/','auth']);
      }
      return token;

    } catch (err) {
      console.log('Ha ocurrido un error con las cookies',err)
      return false; // Si no se cumple el try, se ejecuta el catch y retorna false y el error.
    }

  }
  
}
