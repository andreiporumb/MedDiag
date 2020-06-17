import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Form2222FeverComponent } from './form2222-fever.component';

describe('Form2222FeverComponent', () => {
  let component: Form2222FeverComponent;
  let fixture: ComponentFixture<Form2222FeverComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Form2222FeverComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Form2222FeverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
