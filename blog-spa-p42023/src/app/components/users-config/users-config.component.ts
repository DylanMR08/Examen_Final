import { Component } from '@angular/core';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-users-config',
  templateUrl: './users-config.component.html',
  styleUrls: ['./users-config.component.css'],
  providers:[UserService]
})
export class UsersConfigComponent {
  public users:Array<User>;
  constructor(
    private _userService:UserService
  ){
    this.users=[];
    this.loadUsers();
  }

  private loadUsers(){
    this._userService.getAll().subscribe({
      next:(response:any)=>{
        if(response.status==200){
          this.users=response.data;
        }
      },
      error:(err:Error)=>{
        console.log(err);
      }
    });
  }


}
