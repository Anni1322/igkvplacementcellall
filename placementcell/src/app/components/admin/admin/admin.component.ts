import { Component, Input, OnInit } from '@angular/core';
 

 


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent  implements OnInit  {
  
  @Input()
  src?: string;
  
  @Input()
  size = 128;
  
  user: any;
  
  notification_detail: any;

  constructor() {
    
  }
ngOnInit(): void {

}

 
 

onlogout() {
  
}

logout(){ 

 this.onlogout();

}

  
}
