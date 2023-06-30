import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { server } from 'src/app/services/global';
import { PostService } from 'src/app/services/post.service';
import { Post } from 'src/app/models/post';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css'],
  providers:[PostService]
})
export class PostDetailComponent {
  public post:any;
  public url:string;
  constructor(
    private _postService:PostService,
    private _router:Router,
    private _route:ActivatedRoute
  ) {
    this.post=new Post(1,1,1,"","","",null);
    this.url=server.url;
   }

   ngOnInit(): void {
    this.getPost();
  }
  getPost():void{
    this._route.params.subscribe(
      (params)=>{
        let id=params['id'];
        this._postService.getPost(id).subscribe({
          next:(response:any)=>{
            if(response.status==200){
              this.post=response.data;
              console.log(this.post);
            }else{
              this._router.navigate(['']);
            }
          },
          error:(error:Error)=>{
              console.log(error.message);
              this._router.navigate(['']);
          }
        });
      }
    );
  }


}
