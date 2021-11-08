import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '@modules/auth/services/auth.service';
import { CookieService } from 'ngx-cookie-service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
  sessionError:boolean = false;
  formLogin: FormGroup = new FormGroup({});

  constructor(private _authService: AuthService,
              private _cookieService: CookieService,
              private _router: Router) { }

  ngOnInit(): void {
    this.formLogin = new FormGroup(
      {
        email: new FormControl('', [
          Validators.required,
          Validators.email
        ]), 
        password: new FormControl('',[
          Validators.required,
          Validators.minLength(6),
          Validators.maxLength(12)
        ])
      }
    )
  }

  sendLogin():void {
    // const body = this.formLogin.value;
    // console.log(body);
    const { email,password } = this.formLogin.value; // Desestructuramos el formLogin

    this._authService.sendCredentials(email,password)
      .subscribe(res => { // Cuando el usuario ingresa las credenciales corectas se ejecuta esta parte
        console.log('sesion iniciada',res);
        const { tokenSession, data } = res;
        this._cookieService.set('token', tokenSession, 4, '/') // Guardado de cookie desde el componente. El nombre de cookie, valor que le vamos a dar a esa cookie, fecha de expiracion, '/' valido para toda la app. El dia de expiracion tambien puede ser colocado en environment y aca accederiamos a el como por ejemplo environment.expDate .
        this._router.navigate(['/','tracks'])
      }, err => { // Aca cuando el usuario ingrese credenciales incorrectas
        this.sessionError = true;
        console.log('Ha ocurrido el siguiente error',err);
      });
  }

}
