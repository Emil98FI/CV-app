import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GprojectPage } from './gproject.page';

describe('GprojectPage', () => {
  let component: GprojectPage;
  let fixture: ComponentFixture<GprojectPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GprojectPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GprojectPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
