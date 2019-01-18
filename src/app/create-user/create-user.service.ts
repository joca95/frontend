import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { UserModel } from './../model/user.model';
import { RestResponse } from './../model/restResponse.model';

@Injectable({
  providedIn: 'root'
})
export class CreateUserService {

  constructor(private http: HttpClient) { }

  public validate(user: UserModel): boolean {
    let isValue = true;

    if (!user.primerNombre) {
      isValue = false;
    }
    if (!user.apellidoPaterno) {
      isValue = false;
    }
    if (!user.apellidoMaterno) {
      isValue = false;
    }

    return isValue;
  }

  public guardarOEditar(user: UserModel): Observable<RestResponse> {
    return this.http.post<RestResponse>("http://localhost:8080/guardarOEditar", JSON.stringify(user));
  }
}
