import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { StepRendererComponent } from './step-renderer.component';

describe('StepRendererComponent', () => {
  let component: StepRendererComponent;
  let fixture: ComponentFixture<StepRendererComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StepRendererComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(StepRendererComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
