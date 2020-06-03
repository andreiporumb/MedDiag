import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SexchooseComponent } from './sexchoose.component';

describe('SexchooseComponent', () => {
  let component: SexchooseComponent;
  let fixture: ComponentFixture<SexchooseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SexchooseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SexchooseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
