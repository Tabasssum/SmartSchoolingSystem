import { Component, Injectable, OnInit } from '@angular/core';
import { ForStuRegistService } from '../register/for-stu-regist.service';
import { RegisterationPage } from '../registeration/registeration.page';

@Component({
  selector: 'app-generate-card',
  templateUrl: './generate-card.page.html',
  styleUrls: ['./generate-card.page.scss'],
})
export class GenerateCardPage implements OnInit{
  qrCode: String;
  Sname: string = this.forStuRegSer.getName(); 
  Sid: string = this.forStuRegSer.getSid();
  age: number = this.forStuRegSer.getAge();
  fname: string = this.forStuRegSer.getFname();
  class: number = this.forStuRegSer.getClass();

  constructor( 
    public forStuRegSer:ForStuRegistService,
    public registerPage:RegisterationPage
    ) {
    this.registerPage.generateQRCode();
    this.qrCode = this.registerPage.qrData;
  }

  ngOnInit() {}

}
