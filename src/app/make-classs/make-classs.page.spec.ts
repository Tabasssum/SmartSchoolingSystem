import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MakeClasssPage } from './make-classs.page';

describe('MakeClasssPage', () => {
  let component: MakeClasssPage;
  let fixture: ComponentFixture<MakeClasssPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MakeClasssPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MakeClasssPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
