import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-scanner-page',
  templateUrl: './scanner-page.page.html',
  styleUrls: ['./scanner-page.page.scss'],
})
export class ScannerPagePage implements OnInit {
  scanned = null;
  studentPage = [
    { title: 'Home Works', url: '', icon: 'book' },
    { title: 'Quiz', url: '', icon: 'document' },
    { title: 'Result', url: '', icon: 'medal' }
  ];
  constructor(private barcode:BarcodeScanner,public router:Router,public appComp:AppComponent) { }

  ngOnInit() {}

  scanCode(){
    this.barcode.scan().then(code => {
      this.scanned = code.text;
      if(this.scanned === '1234'){
        this.router.navigateByUrl('/student');
        this.appComp.appPages = this.studentPage;
        this.appComp.username = this.scanned;
      }
    })
  }

}
