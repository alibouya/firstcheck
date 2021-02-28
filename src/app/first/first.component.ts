import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {
  color: '';
  constructor() { }

  ngOnInit(): void {
  }
  onchangeColor(value){
   this.color=value;
  }
  changecolorOnClick(){
    this.color='';
  }
 
}
