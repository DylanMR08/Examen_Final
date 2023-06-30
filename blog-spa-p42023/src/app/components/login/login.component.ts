import { Component } from '@angular/core';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';
import { timer } from 'rxjs';
import {Router,ActivatedRoute} from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers:[UserService]
  
})
export class LoginComponent {
  public status:number;
  public user:User;
  constructor(
    private _userService:UserService,
    private _router:Router,
    private _routes:ActivatedRoute
  ){
    this.status=-1;
    this.user=new User(1,"","","","","","","");

  }

  onSubmit(form:any){
    this._userService.login(this.user).subscribe({
      next:(response:any)=>{        
        if(response.status!=401){
          //console.log(response);
          localStorage.setItem("token",response);
          this._userService.getIdentityFromAPI().subscribe({
            next:(response:any)=>{              
              localStorage.setItem("identity",JSON.stringify(response));
            },
            error:(err:Error)=>{

            }
          });
          this._router.navigate(['']);

        }else{
          this.status=0;
          let counter=timer(3000);
          counter.subscribe(n=>{
            this.status=-1;
          });
          console.log("Usuario o contraseña incorrectos");
        }
      },
      error:(err:Error)=>{
        console.log(err);
      }
    });
  }
  ngOnInit(): void {
    this.logout();
  }
  logout(){
    this._routes.params.subscribe(
      params=>{
        let logout=+params['sure'];
        if(logout==1){
          localStorage.removeItem('identity');
          localStorage.removeItem('token');
          this._router.navigate(['']);
        }
      }
    );
  }
 
}
