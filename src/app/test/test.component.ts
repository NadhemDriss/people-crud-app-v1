import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  name='Nadhem';
  userList = [];
  photourl= 'assets/Nadhem.jpg';
  person = ['Nadhem', 'Driss','27'];
  payobject=[{
    "id": 28,
    "Title": "Sweden",
    "name":"amine",
  },
   {
    "id": 56,
    "Title": "USA",
    "name":"nadhem",
  },
   {
    "id": 89,
    "Title": "England",
    "name":"raed",
  }]
  supprimer(personne){
      let index = this.payobject.indexOf(personne);
      this.payobject.splice(index,1);

  }

  constructor(private userservice:UserService) { }

  ngOnInit(): void {
    this.userservice.getAllUsers().subscribe(
result =>{

this.userList=result;
console.log(this.userList);
},
error =>{
  console.log(error);
  
}


    )
  }

  hello(nom:string) {
    alert ('hello '+nom);
    
  }
}
