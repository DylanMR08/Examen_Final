import {HttpClient,HttpHeaders} from '@angular/common/http';
import {Injectable} from '@angular/core';
import{server} from './global';
import {Category} from '../models/category';
import {Observable} from 'rxjs';

@Injectable({
    providedIn:'root'
}) export class CategoryService{
    public url:string;
    constructor(private _http:HttpClient){
        this.url=server.url;
    }
    getCategories():Observable<any>{
        let header=new HttpHeaders().set('Content-Type','application/x-www-form-urlencoded');
        let option={
            headers:header
        }
        return this._http.get(this.url+"category",option);
    }
    getCategory(id:number):Observable<any>{
        return this._http.get(this.url+'category/'+id);
    }
}