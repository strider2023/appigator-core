import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TextfieldComponent } from './textfield.component';

describe('TextfieldComponent', () => {
  let component: TextfieldComponent;
  let fixture: ComponentFixture<TextfieldComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TextfieldComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TextfieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
