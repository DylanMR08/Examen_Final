import { Component } from '@angular/core';
import {User} from '../../models/user';
import{UserService} from '../../services/user.service';
import { timer } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css'],
  providers:[UserService]
})
export class UserRegisterComponent {
  public status:number;
  public user:User;
  constructor(private _userService:UserService, private _router:Router) {
    this.status=-1;
    this.user=new User(1,"","","user_role","","","","");
  }
  onSubmit(form:any){
    console.log(this.user);
    this._userService.register(this.user).subscribe({
      next: (response:any)=>{
        console.log(response);
        if(response.status==200){
          this.status=0;          
          form.reset();
          this._router.navigate(['login']);
         }
      },
      error:(er:Error)=>{
        console.log(er);
        this.status=1;
          let counter=timer(5000);
          counter.subscribe(n=>{
            console.log(n);
            this.status=-1;
         });
      }
    });
  }
}
