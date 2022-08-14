
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { RequestService } from '../service/request.service';
import { Root } from '../map';

@Component({
  selector: 'app-calci',
  templateUrl: './calci.component.html',
  styleUrls: ['./calci.component.css']
})
export class CalciComponent implements OnInit {
  data !:Root[];
  search !: string;
  price_per_coin : number = 0;
  total_investment :number = 0; 
  constructor(private req : RequestService,private http:HttpClient) { }

  ngOnInit(): void {
    
  }
  getData1(){
    this.req.getData(this.search.toLocaleLowerCase()).subscribe(res =>{
      this.data = res;
  
     console.log(res);
    }
    );

  }

}
