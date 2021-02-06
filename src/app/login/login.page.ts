import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  name:string;
  pass:string;
  slctCate:string;
  adminPage = [
    { title: 'Edit Profile', url: '/editprofile', icon: 'create' },
    { title: 'Registration', url: '/registeration', icon: 'person-add' },
    { title: 'Make Classes', url: '/make-classs', icon: 'build' },
    { title: 'Schedule', url: '/schedule', icon: 'time' }
  ];
  canteenPage = [
    { title: 'Edit Profile', url: '/editprofile', icon: 'create' },
    { title: 'Items', url: '/items', icon: 'cart' },
    { title: 'Wallet', url: '/wallet', icon: 'cash' }
  ];
  parentPage = [
    { title: 'Edit Profile', url: '/editprofile', icon: 'create' },
    { title: 'Student Login', url: '/scanner-page', icon: 'log-in' }
  ];
  teacherPage = [
    { title: 'Edit Profile', url: '/editprofile', icon: 'create' },
    { title: 'Uploads', url: '/upload-pages', icon: 'cloud-upload' }
  ];
  constructor(public route: Router, public alrtCtrl:AlertController, public appComp: AppComponent) { }

  ngOnInit() {
  
  }

  login(){
    if((this.name === 'admin' && this.pass === 'admin')&&(this.slctCate == 'admin')){
      this.route.navigateByUrl('/admin');
      this.appComp.appPages = this.adminPage;
      this.appComp.username = this.name;
    }
    else if((this.name === 'teacher' && this.pass === 'teacher')&&(this.slctCate == 'teacher')){
      this.route.navigateByUrl('/teacher');
      this.appComp.appPages = this.teacherPage;
      this.appComp.username = this.name;
    }
    else if((this.name === 'parent' && this.pass === 'parent')&&(this.slctCate == 'parent')){
      this.route.navigateByUrl('/parent');
      this.appComp.appPages = this.parentPage;
      this.appComp.username = this.name;
    }
    else if((this.name === 'canteen' && this.pass === 'canteen')&&(this.slctCate == 'canteen')){
      this.route.navigateByUrl('/canteen');
      this.appComp.appPages = this.canteenPage;
      this.appComp.username = this.name;
    }
    else{
      this.alertMessage();
    }
  }

  async alertMessage() {
    const err = await this.alrtCtrl.create({
      cssClass: '.my-custom-class',
      header: 'Login Error',
      message: 'maybe incorrect username or password',
      buttons: ['OK']       
    });
    await err.present();
  }

}
