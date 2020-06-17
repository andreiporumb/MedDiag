import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Form2222VeinsComponent } from './form2222-veins.component';

describe('Form2222VeinsComponent', () => {
  let component: Form2222VeinsComponent;
  let fixture: ComponentFixture<Form2222VeinsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Form2222VeinsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Form2222VeinsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
