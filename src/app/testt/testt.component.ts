import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl, FormBuilder, Validators } from '@angular/forms'
@Component({
  selector: 'app-testt',
  templateUrl: './testt.component.html',
  styleUrls: ['./testt.component.css']
})
export class TesttComponent implements OnInit {
  myForm : FormGroup

  constructor(private fb: FormBuilder) { 
let formControls = {

firstname: new FormControl('',[
Validators.required,
Validators.minLength(2),
Validators.pattern("[a-z .'-]+")

])

}
this.myForm = this.fb.group(formControls);

  }
  get firstname(){

    return this.myForm.get('firstname');
  }

  ngOnInit(): void {
  }
  saveUser(){
let message = (this.myForm.value);
  console.log(message);
 
}
}
