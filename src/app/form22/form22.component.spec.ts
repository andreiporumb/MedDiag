import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Form22Component } from './form22.component';

describe('Form22Component', () => {
  let component: Form22Component;
  let fixture: ComponentFixture<Form22Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Form22Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Form22Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
