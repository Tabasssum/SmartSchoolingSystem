import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, MenuController } from '@ionic/angular';
import { AppComponent } from '../app.component';

interface Users {
  userId: number;
  userName: string;
}

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
  user: Users[] = [{userId:1,userName:'admin'},{userId: 2,userName: "teacher"},{userId: 3,userName: "parent"},{userId: 4,userName: "canteen"}];

  constructor(
    public route: Router, 
    public alrtCtrl:AlertController,
    public mnuCtrl:MenuController, 
    public appComp: AppComponent) { }

  ngOnInit() {
  
  }

  login(){
    if((this.name === 'admin' && this.pass === 'admin')&&(this.slctCate == '1')){
      this.route.navigateByUrl('/admin');
      this.mnuCtrl.enable(true);
      this.appComp.appPages = this.adminPage;
      this.appComp.username = this.name;
    }
    else if((this.name === 'teacher' && this.pass === 'teacher')&&(this.slctCate == '2')){
      this.route.navigateByUrl('/teacher');
      this.mnuCtrl.enable(true);
      this.appComp.appPages = this.teacherPage;
      this.appComp.username = this.name;
    }
    else if((this.name === 'parent' && this.pass === 'parent')&&(this.slctCate == '3')){
      this.route.navigateByUrl('/parent');
      this.mnuCtrl.enable(true);
      this.appComp.appPages = this.parentPage;
      this.appComp.username = this.name;
    }
    else if((this.name === 'canteen' && this.pass === 'canteen')&&(this.slctCate == '4')){
      this.route.navigateByUrl('/canteen');
      this.mnuCtrl.enable(true);
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
