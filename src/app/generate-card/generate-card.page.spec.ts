import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GenerateCardPage } from './generate-card.page';

describe('GenerateCardPage', () => {
  let component: GenerateCardPage;
  let fixture: ComponentFixture<GenerateCardPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GenerateCardPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GenerateCardPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
