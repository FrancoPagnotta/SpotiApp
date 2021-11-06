import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly URL = environment.api;

  constructor(private _httpClient: HttpClient,
              private _cookieService: CookieService) { }

  sendCredentials(email:string, password:string): Observable<any> {
    const body = {
      email,
      password
    }
    return this._httpClient.post(`${this.URL}/auth/login`,body)
    .pipe(
      tap((res:any ) => { // Seteo de cookie mediante el uso de un pipe y del operador tap
        const { tokenSession, data } = res
        this._cookieService.set('cookie_service', tokenSession, 4, '/' );
        
      })
    )
  }

}
