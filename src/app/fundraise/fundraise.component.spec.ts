import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FundraiseComponent } from './fundraise.component';

describe('FundraiseComponent', () => {
  let component: FundraiseComponent;
  let fixture: ComponentFixture<FundraiseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FundraiseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FundraiseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
