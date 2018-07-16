import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CleanenergyrequirementComponent } from './cleanenergyrequirement.component';

describe('CleanenergyrequirementComponent', () => {
  let component: CleanenergyrequirementComponent;
  let fixture: ComponentFixture<CleanenergyrequirementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CleanenergyrequirementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CleanenergyrequirementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
