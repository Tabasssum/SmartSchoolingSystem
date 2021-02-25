import { Component, Injectable, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ForAllRegisterService } from '../register/for-all-register.service';
import { ForStuRegistService } from '../register/for-stu-regist.service';

interface Users {
  userId: number;
  userName: string;
}
@Injectable({
  providedIn: 'any'
})
@Component({
  selector: 'app-registeration',
  templateUrl: './registeration.page.html',
  styleUrls: ['./registeration.page.scss'],
})
export class RegisterationPage implements OnInit {
  name: string;
  Sid: string;
  age: number;
  fname: string;
  fid: number;
  email: string;
  id: number;
  phone: number;
  pass: string;
  cpass: string;
  public qrData: string;
  selctUsr: string;
  user: Users[] = [{ userId: 1, userName: "admin" }, { userId: 2, userName: "teacher" }, { userId: 3, userName: "parent" }, { userId: 4, userName: "canteen" }, { userId: 5, userName: "student" }];
  class: number;

  constructor(
    public router: Router,
    public forStuRegSer:ForStuRegistService,
    public forAllRegSer:ForAllRegisterService
    ){ }

  ngOnInit() { }

  userSelect() {
    if (this.selctUsr === '5') {
      document.getElementById('forStu').style.display = 'block';
      this.setNameForStudent();
      document.getElementById('forAll').style.display = 'none';
    }
    else {
      document.getElementById('forAll').style.display = 'block';
      document.getElementById('forStu').style.display = 'none';
    }
  }

  generateQRCode() {
      var combine = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!@#$%^&*()_+=-\\|}]{[';:\"/?.>,<~`0123456789";
      var stringLength = combine.length;
      var result = '';
      for (var i = 0; i < 15; i++) {
        result += combine.charAt(Math.floor(Math.random() * stringLength));
      }
      this.qrData = result + this.forStuRegSer.getSid();
  }

  generatCard(){
    this.userSelect();
    this.router.navigateByUrl('/generate-card');
  }

  setNameForStudent(){
    this.forStuRegSer.setSid(this.Sid);
    this.forStuRegSer.setName(this.name);
    this.forStuRegSer.setAge(this.age);
    this.forStuRegSer.setFname(this.fname);
    this.forStuRegSer.setFid(this.fid);
    this.forStuRegSer.setClass(this.class);
  }

  setNameForAll(){
    this.forAllRegSer.setName(this.name);
    this.forAllRegSer.setId(this.id);
    this.forAllRegSer.setPhone(this.phone);
    this.forAllRegSer.setEmail(this.email);
    this.forAllRegSer.setPass(this.pass);
  }
}