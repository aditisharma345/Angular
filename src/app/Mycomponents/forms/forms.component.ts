import { Component } from '@angular/core';

import { FormGroup,FormControl,Validators } from '@angular/forms';
@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent {
title="ygbvfc";

  loginUser(item:any){
console.log("input form",item);
  }
  User(item:any)
  {
console.log(" validating form ",item);
  }

  REACTIVEForm=new FormGroup({
    name:new FormControl(''),
    password:new FormControl(''),
  })

  UserLogin(){
    console.log(this.REACTIVEForm);
    console.log(this.REACTIVEForm.value);
  }

  xform=new FormGroup({
    name:new FormControl('',[Validators.required,Validators.pattern('[a-z A-Z]+$') ]),
    password:new FormControl(''),
  })

  User_y(){
    console.log(this.xform);
    console.log(this.xform.value);
  }
  get name(){
    return this.xform.get('name');
  }
  
  get password()
  {
    return this.xform.get('password');
  }
}
