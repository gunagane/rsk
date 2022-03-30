import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.scss']
})
export class DirectivesComponent implements OnInit {
  public color="orang"

  public massage = "my name ganesh"
  public persons=[{
    name:"ganesh",age:26
  },{
    name:"rajesh",age:25
  }]
  public date = new Date();
  constructor() { }

  ngOnInit(): void {
  }

}
