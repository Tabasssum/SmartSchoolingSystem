import { Component, OnInit } from '@angular/core';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';

@Component({
  selector: 'app-scanner-page',
  templateUrl: './scanner-page.page.html',
  styleUrls: ['./scanner-page.page.scss'],
})
export class ScannerPagePage implements OnInit {
  scanned = null;

  constructor(private barcode:BarcodeScanner) { }

  ngOnInit() {}

  scanCode(){
    this.barcode.scan().then(code => {
      this.scanned = code.text;
    })
  }

}
