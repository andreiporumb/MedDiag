import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Form222HeartAttackComponent } from './form222-heart-attack.component';

describe('Form222HeartAttackComponent', () => {
  let component: Form222HeartAttackComponent;
  let fixture: ComponentFixture<Form222HeartAttackComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Form222HeartAttackComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Form222HeartAttackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
