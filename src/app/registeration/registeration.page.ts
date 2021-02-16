import { Component, OnInit } from '@angular/core';

interface Classes {
  classId: number;
  className: string;

}

@Component({
  selector: 'app-registeration',
  templateUrl: './registeration.page.html',
  styleUrls: ['./registeration.page.scss'],
})
export class RegisterationPage implements OnInit {
  selctClass: string;
  selctUsr: string;
  name: string;
  id: number;
  age: number;
  fname: string;
  fid: number;
  email: string;
  phone: number;
  pass: string;
  cpass: string;
  forAll: boolean = false;
  forStu: boolean = false;
  class: Classes[] = [
    {
      classId: 1,
      className: "class-1"
    },
    {
      classId: 2,
      className: "class-2"
    },
    {
      classId: 3,
      className: "class-3"
    },
    {
      classId: 4,
      className: "class-4"
    },
    {
      classId: 5,
      className: "class-5"
    },
    {
      classId: 6,
      className: "class-6"
    },
    {
      classId: 7,
      className: "class-7"
    },
    {
      classId: 8,
      className: "class-8"
    },
    {
      classId: 9,
      className: "class-9"
    },
    {
      classId: 10,
      className: "class-10"
    }
  ];

  constructor() { }

  ngOnInit() {}

  userSelect() {
    if (this.selctUsr === 'student') {
      this.forStu = true;
      this.forAll = false;
    }
    else {
      this.forAll = true;
      this.forStu = false;
    }
  }

  // confirmPass(x){
  //   var c = document.getElementById('cnfrm').style.backgroundColor = 'green';
  //   var d = document.getElementById('cnfrm').style.backgroundColor = 'red';
  //   if(this.cpass !== this.pass){
  //     x.value = d;
  //   }
  //   else{
  //     x.value = c;
  //   }
  // }

}
