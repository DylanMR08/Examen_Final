import { Component } from '@angular/core';
import {AngularEditorComponent,AngularEditorConfig} from '@kolkov/angular-editor';

import { PostService } from 'src/app/services/post.service';
import { CategoryService } from 'src/app/services/category.service';
import { UserService } from 'src/app/services/user.service';
import { Post } from 'src/app/models/post';


@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.css'],
  providers:[PostService,CategoryService,UserService]
})
export class NewPostComponent {
  public status:number;
  public identity;
  public post:Post;
  private token;
  public categories:any;
  public fileName:string;

  public config:AngularEditorConfig={
    editable:true,
    spellcheck:true,
    placeholder:"Agregar el contenido del post en esta sección"

  };
  constructor(
    private _postService:PostService,
    private _categoryService:CategoryService,
    private _userService:UserService
  ){
    this.status=-1;
    this.identity=_userService.getIdentity();
    this.post=new Post(1,this.identity.iss,0,"","","",null);
    this.token=_userService.getToken();
    this.fileName="";
  }
  ngOnInit(): void {
      this.getCategories();
      console.log(this.categories);
  }
  getCategories(){
    this._categoryService.getCategories().subscribe({
      next:(response:any)=>{
        if(response.status==200){
          this.categories=response.data;
        }
      },
      error:(err:Error)=>{
        this.categories=null;
        console.log(err);
      }
    });
  }
  uploadImage(event:any){
    const file:File=event.target.files[0];
    if(file){
      this.fileName=file.name;
      const formData=new FormData();
      formData.append('file0',file);
      this._postService.uploadImage(formData,this.token).subscribe({
        next:(response:any)=>{
          //console.log(response);
          if(response.status==200){
            this.post.image=response.image;
          }
        },
        error:(err:Error)=>{
          console.log(err);
        }
      });
    }
  }
  onSubmit(form:any){
    //console.log(this.post);
    this._postService.create(this.post,this.token).subscribe({
      next:(response:any)=>{
        if(response.status==200){
          this.status=0;
          form.reset();
        }
        console.log(response)
      },
      error:(err:Error)=>{
        console.log(err)
        this.status=1;
      }
    });
  }

}
