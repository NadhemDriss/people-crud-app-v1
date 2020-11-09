import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms'
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../user';
import { UserService } from '../user.service';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit {
updateUserForm : FormGroup
  constructor(private fb : FormBuilder, 
    private route: ActivatedRoute,
     private userService:UserService, 
     private router:Router,
     private toastr: ToastrService) {
    let formControls = {
       firstname: new FormControl('',[
        Validators.required,
        Validators.minLength(2),
        Validators.pattern("[a-z .'-]+")
        
        ]),
       lastname: new FormControl('',[
        Validators.required,
        Validators.minLength(2),
        Validators.pattern("[a-z .'-]+")
        
        ]),
       phone: new FormControl('',[
        Validators.required,
        Validators.minLength(8),
        Validators.maxLength(13),
        Validators.pattern("[0-9]+")
        
        ])


    }
    this.updateUserForm = this.fb.group(formControls)    
   }
   get firstname() {return this.updateUserForm.get('firstname') }
   get lastname() {return this.updateUserForm.get('lastname') }
   get phone() {return this.updateUserForm.get('phone') }

  ngOnInit(): void {
    let  idUser = this.route.snapshot.params.id;
    console.log(idUser);
    this.userService.getOneUsers(idUser).subscribe(
      res=>{
        let user=res;
        console.log(user);    
       this.updateUserForm.patchValue({
      firstname:user.firstName,
      lastname:user.lastName,
      phone:user.phone
       })
        
      },
      err=>{
        console.log(err);
      }
    )
  }
  updateUser(){
  
    let data = this.updateUserForm.value;
    let idUser = this.route.snapshot.params.id;
    let user = new User(data.firstname,data.lastname,null,data.phone,null,idUser)
    
    this.userService.updateUser(user).subscribe(
      res=>{
        console.log(res) ;  
        this.toastr.warning('Modification effectué avec succées', 'Alert!');    
        this.router.navigate(['/people-list'])
        
      },
      err=>{
        console.log(err);
      }
    )
     
    }

}
