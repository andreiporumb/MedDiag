import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SympthomRecapComponent } from './sympthom-recap.component';

describe('SympthomRecapComponent', () => {
  let component: SympthomRecapComponent;
  let fixture: ComponentFixture<SympthomRecapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SympthomRecapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SympthomRecapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
