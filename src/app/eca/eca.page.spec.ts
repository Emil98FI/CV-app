import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EcaPage } from './eca.page';

describe('EcaPage', () => {
  let component: EcaPage;
  let fixture: ComponentFixture<EcaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EcaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EcaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
