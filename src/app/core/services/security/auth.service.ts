import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { authLogin, loginResponse } from '../../types/auth';
import { environment } from '../../../../environments/environment';
import { lastValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private _httpCliente: HttpClient) { }

  login(payload: authLogin){
    return lastValueFrom(this._httpCliente.get<loginResponse>(`${environment.API_URL}login`));
  }
}
