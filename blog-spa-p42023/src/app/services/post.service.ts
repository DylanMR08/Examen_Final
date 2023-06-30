import{Injectable} from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import {Observable} from 'rxjs';
import{server} from './global';
import { Post } from '../models/post';
@Injectable({
    providedIn:'root'
}) export class PostService{
    public url:string;
    constructor(
        private _http:HttpClient
    ){
        this.url=server.url;
    }
    getPosts():Observable<any>{
        let header=new HttpHeaders().set('Content-Type','application/x-www-form-urlencoded');
        let option={
            headers:header
        }
        return this._http.get(this.url+"post",option);
    }

    getByStarWith(start:string):Observable<any>{
        return this._http.get(this.url+"post/getstart/"+start);
    }

    uploadImage(data:any,token:any):Observable<any>{
        let header=new HttpHeaders().set('beartoken',token);
        return this._http.post(this.url+"post/upload",data,{headers:header});
    }
    create(post:Post,token:any):Observable<any>{
        let header=new HttpHeaders()
            .set('Content-Type','application/x-www-form-urlencoded')
            .set('beartoken',token);
        let option={
            headers:header
        }
        let data='data='+JSON.stringify(post);
        return this._http.post(this.url+"post",data,option);
    }
    getPost(id:number):Observable<any>{
        return this._http.get(this.url+"post/"+id);
    }
}
