import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ScannerPagePage } from './scanner-page.page';

describe('ScannerPagePage', () => {
  let component: ScannerPagePage;
  let fixture: ComponentFixture<ScannerPagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScannerPagePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ScannerPagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
