import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


interface user {
  name:string,
  email:string,
  phoneno:number,
  id:number
}

@Injectable({
  providedIn: 'root'
})
export class CrudService {
   endpoint=" http://localhost:3000/users/";
  constructor(public http:HttpClient) { }

adduser(data:any):Observable<user>{
  return this.http.post<user>(this.endpoint,data);
}
getuser():Observable<user>{
  return this.http.get<user>(this.endpoint);
}
getSingleUser(id:number):Observable<user>{
  return  this.http.get<user>(this.endpoint+id);
  // we can also use below expression to do the task
  // const userUrl = `${this.endpoint}/${id}`;  Construct the URL for the specific user
  // return this.http.get<User>(userUrl);
}
edituser(id:number,data:any):Observable<user>{
  return this.http.put<user>(this.endpoint+id,data);
}
deleteUser(id:number):Observable<user>{
  return   this.http.delete<user>(this.endpoint+id);
}

}
