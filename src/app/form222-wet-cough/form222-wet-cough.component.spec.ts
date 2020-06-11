import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Form222WetCoughComponent } from './form222-wet-cough.component';

describe('Form222WetCoughComponent', () => {
  let component: Form222WetCoughComponent;
  let fixture: ComponentFixture<Form222WetCoughComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Form222WetCoughComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Form222WetCoughComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
