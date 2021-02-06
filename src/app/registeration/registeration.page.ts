import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registeration',
  templateUrl: './registeration.page.html',
  styleUrls: ['./registeration.page.scss'],
})
export class RegisterationPage implements OnInit {
  name:string;
  email:string;
  phone:number;
  selctCate:string;
  pass:string;
  cpass:string;

  constructor() { }

  ngOnInit() {
  }

  confirmPass(x){
    var c = document.getElementById('cnfrm').style.backgroundColor = 'green';
    var d = document.getElementById('cnfrm').style.backgroundColor = 'red';
    if(this.cpass !== this.pass){
      x.value = d;
    }
    else{
      x.value = c;
    }
  }

}
