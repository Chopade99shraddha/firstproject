import { Component, OnInit } from '@angular/core';
import { TemplateForm } from '../template';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.scss']
})
export class TemplateFormComponent implements OnInit {

  constructor(
  
  ) { }
tc=new TemplateForm
  ngOnInit(): void {
  }
submitData()
{
  console.log(this.tc.name)
  console.log(this.tc.email)
  console.log(this.tc.age)
}
}
