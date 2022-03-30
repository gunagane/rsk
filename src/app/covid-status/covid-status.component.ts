import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-covid-status',
  templateUrl: './covid-status.component.html',
  styleUrls: ['./covid-status.component.scss']
})
export class CovidStatusComponent implements OnInit {
  TotalData : any
  District:any

  constructor(private service:ServiceService) { }

  ngOnInit(): void {
    this.getdata();
  }

  getdata(){
    let obj :any = {}
    this.service.getData().subscribe(res=>{
      this.TotalData = Object.values(res)
      // console.log(this.TotalData)
      for(let i=0; i<this.TotalData.length; i++){
      this.District = this.TotalData[i].districts 
      // console.log(this.District)
      if(this.District){
      let dist = Object.keys(this.District)
      // console.log(this.District)
      for(let j=0; j<dist.length; j++){
        obj[dist[j]] = (this.District[dist[j]].total)
        console.log(obj)
      }
    }
  }
    })
  }
}
  
