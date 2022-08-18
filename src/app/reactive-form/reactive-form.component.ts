import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, UntypedFormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.scss']
})
export class ReactiveFormComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
rf=new FormGroup(
  {
    name:new FormControl(),
    email:new FormControl(null,[Validators.email,Validators.required]),
    age:new FormControl(0,[Validators.required,Validators.min(18),Validators.max(30)]),
  }
)
get age():FormControl
{
  return this.rf.get("age") as FormControl
}
get email():FormControl
{
  return this.rf.get("email") as FormControl
}
}
