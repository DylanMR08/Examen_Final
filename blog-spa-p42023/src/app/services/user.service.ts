import{HttpClient,HttpHeaders} from '@angular/common/http';
import{Injectable} from '@angular/core';
import{Observable} from 'rxjs';
import{server} from './global';
import {User} from '../models/user';

@Injectable({
    providedIn: 'root'
  }) export class UserService{
    private url:string;
    constructor(
        public _http:HttpClient
    ){
        this.url=server.url;
    }
    getAll():Observable<any>{
        let header=new HttpHeaders().set('Content-Type','application/x-www-form-urlencoded');
        return this._http.get(this.url+'user',{headers:header});
    }
    register(user:User):Observable<any>{
        let userJson=JSON.stringify(user);
        let params='data='+userJson;
        let header=new HttpHeaders().set('Content-Type','application/x-www-form-urlencoded');
        return this._http.post(this.url+'user',params,{headers:header});
    }
    login(user:User):Observable<any>{
        let userJson=JSON.stringify(user);
        let params='data='+userJson;
        let header=new HttpHeaders().set('Content-Type','application/x-www-form-urlencoded'); 
        let option={
            headers:header
        }
        return this._http.post(this.url+'user/login',params,option);
    }
    
    getIdentityFromAPI():Observable<any>{
        let header;
        let token=localStorage.getItem('token');        
        if(token){
            header=new HttpHeaders().set('Content-Type','application/x-www-form-urlencoded')
            .set('beartoken',token);         
        }else{
            header=new HttpHeaders().set('Content-Type','application/x-www-form-urlencoded'); 
        }
        let option={
            headers:header
        }
        return this._http.get(this.url+"user/getidentity",option);   
        
    }
    getToken(){
        return localStorage.getItem("token");
    }
    getIdentity(){
        let identity=localStorage.getItem("identity");
        if(identity){
            return JSON.parse(identity);
        }
        return null;
    }
}