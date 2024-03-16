import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { authLogin } from '../../../core/types/auth';
import { AuthService } from '../../../core/services/security/auth.service';
import { SessionService } from '../../../core/services/security/session.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrl: './signin.component.css'
})
export class SigninComponent {
  form: FormGroup;

  constructor(private fb: FormBuilder, private _authService: AuthService, private _sessionService: SessionService){
    this.form = this.fb.group({
      email: ['cesarmayol@gmail.com', [Validators.email, Validators.required]],
      password: ['Cesar123', [Validators.required, Validators.minLength(5)]]
    });
  }

  get emailField(){
    return this.form.get('email');
  }

  get passwordField(){
    return this.form.get('password');
  }

  input(ev: Event){
    console.log("ev", ev);
  }

 async submit(e: Event){
    e.preventDefault();
    if(this.form.valid){
      const {email, password} = this.form.value;
      console.log(email);
      console.log(password);

      const payload: authLogin = {
        email,
        password
      }

      const result = await this._authService.login(payload);
      console.log(result);

      if(result.token){
        this._sessionService.setCurrentUserValue(result);
      }
    }else{
      alert("El formulario no es válido");
    }
  }
}
