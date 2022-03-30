import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  // template:`<div>{{"My Name Is "+name}}</div>
  // <input [id]="myId" type="text" value="Ganesh"> 
  // <button type="button"(click)="click()">Click Here</button> 
  // <input [disabled]="IsSubmit" type="text" [value]="myId"> 

  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public name ="Ganesh"
  public myurl = window.location.href
  myId=""
  IsSubmit:boolean=false
  IsSubmit1:boolean=false
  IsSubmit2:boolean=false
  firstClass={
    "first-class": !this.IsSubmit,
    "first1-class": this.IsSubmit1,
    "first2-class": this.IsSubmit2
  }
  style={
    color : "orange",
    fontStyle : "bold"
  }

  public namee = ""
  constructor(private service:ServiceService) { }

  ngOnInit(): void {
  }

  userName(){
    return "welcome:" +this.name
  }
  click(){
    this.IsSubmit = true
  }
  colorChange(){
    this.IsSubmit=true
  }
  mylog(value: any){
    console.log(value)
  }
}
