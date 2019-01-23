import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  public name="Vishwas yadav!";
  public greet="";
  public siteUrl=window.location.href;
  public displayName=false;
  public color1;
  public fruits=["Orange","Apple","Banana","Papaya","Grapes"];

  constructor() { }

  ngOnInit() {
  }
  public onclick(event){
    console.log(event.type);
    this.greet="Hello button is clicked!";
  }
  public logmsg(value){
    console.log(value);
  }

}
