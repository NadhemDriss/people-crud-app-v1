import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { User } from './user';
@Injectable({
  providedIn: 'root'
})
export class UserService {
 
  private getAllUsersUrl="http://localhost:8080/users/all";
  private getOneUsersUrl="http://localhost:8080/users/";
  private deleteUsersUrl="http://localhost:8080/users/";
  private addUsersUrl="http://localhost:8080/users/";
  private updateUsersUrl="http://localhost:8080/users/";

  constructor(private http:HttpClient) {
  }
  getAllUsers(){
return this.http.get<any>(this.getAllUsersUrl);

   }
   getOneUsers(id:string){
    return this.http.get<any>(this.getOneUsersUrl+id);
    
       }
   deleteUsersurl(id:string){
 return   this.http.delete<any>(this.deleteUsersUrl+id);

   }
   addUser(user:User) {

return this.http.post<any>(this.addUsersUrl,user)
   }

   updateUser(user:User) {

    return this.http.post<any>(this.updateUsersUrl,user)
       }
}
