import { Component } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent {


  name : any = "hello"

  a : number = 10;
  b: number= 20;
  c: number = this.a + this.b;


  

}
