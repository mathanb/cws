import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SustainableschoolsprojectComponent } from './sustainableschoolsproject.component';

describe('SustainableschoolsprojectComponent', () => {
  let component: SustainableschoolsprojectComponent;
  let fixture: ComponentFixture<SustainableschoolsprojectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SustainableschoolsprojectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SustainableschoolsprojectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
