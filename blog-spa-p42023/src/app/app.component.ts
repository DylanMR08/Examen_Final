import { Component} from '@angular/core';
import { UserService } from './services/user.service';
import { CategoryService } from './services/category.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[UserService,CategoryService]
})
export class AppComponent {
  public identity:any;
  private checkIdentity;
  public categories:any;
  private checkCategories;
  constructor(
    private _userService:UserService,
    private _categoryService:CategoryService
  ){
    this.checkIdentity=setInterval(()=>{
      this.identity=this._userService.getIdentity();
    },1000);
    this.checkCategories= setInterval(() => {
      this.loadCategories();
    }, 10000);
    
  }   
  public loadCategories(){
    this._categoryService.getCategories().subscribe({
      next: (response:any) => {   
        if(response.status==200){
          this.categories=response.data;
        }else{
          this.categories=null;
        }
      },
      error: (err: Error) => {
        this.categories=null;
        console.error('Error de la petición: ' + err);
      }
    }
    );
  }
  
  
}
