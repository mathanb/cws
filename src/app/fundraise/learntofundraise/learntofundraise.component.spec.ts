import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LearntofundraiseComponent } from './learntofundraise.component';

describe('LearntofundraiseComponent', () => {
  let component: LearntofundraiseComponent;
  let fixture: ComponentFixture<LearntofundraiseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LearntofundraiseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LearntofundraiseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
