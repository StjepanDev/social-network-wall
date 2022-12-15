import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }

  public createNewUser(data:any){
    return new Promise((resolve,reject)=>{
      this.http.post('http://localhost:3000/users',data).subscribe(
        (res)=>{
        resolve(res);
      },
      (err)=>{
        reject(err);
      }
      );
    })

  }
}
