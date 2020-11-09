import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-people-list',
  templateUrl: './people-list.component.html',
  styleUrls: ['./people-list.component.css']
})
export class PeopleListComponent implements OnInit {
  peopleList = [];
  


  constructor(private userservice:UserService, private router:Router, private toastr: ToastrService) { }
  

  ngOnInit(): void {
    this.userservice.getAllUsers().subscribe(
      result =>{
      
      this.peopleList=result;
      console.log(this.peopleList);
      
      this.router.navigate(['/people-list'])
      },
      error =>{
        console.log(error);
        
      }
    )
  }
  delete(people){
    let index = this.peopleList.indexOf(people);
    this.peopleList.splice(index,1);
    this.userservice.deleteUsersurl(people.id).subscribe(

      res =>{

        
        console.log(this.peopleList);
        this.toastr.warning('Suppression effectué avec succées', 'Alert!');
        this.router.navigate(['/people-list']);
       
        },
        error =>{
          console.log(error);
          
        }
    )
}
}
      


