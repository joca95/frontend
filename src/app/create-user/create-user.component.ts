import { Component, OnInit } from '@angular/core';
import { UserModel } from '../model/user.model';
import { CreateUserService } from './create-user.service';
import { OK } from '../model/httpStatus';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css'],
  providers:[CreateUserService]
})
export class CreateUserComponent implements OnInit {

  private user: UserModel;
  private isValid: boolean = true;
  private mensaje: String = "";

  constructor(private createUserService: CreateUserService, private router: Router) {
    this.user = new UserModel();
  }

  ngOnInit() {

  }

  public guardarOEditar():void{
    this.isValid = this.createUserService.validate(this.user);

    if(this.isValid){
      this.createUserService.guardarOEditar(this.user).subscribe(res=> {
        if(res.responseCode = OK){
          this.router.navigate(['/userComponent']);
        }else{
          this.mensaje = res.mensaje;
          this.isValid = false;
        }
      });
    }else{
      this.mensaje = "Hay campos que son requeridos";
    }
  }
}
