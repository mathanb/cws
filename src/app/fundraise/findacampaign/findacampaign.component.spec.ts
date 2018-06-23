import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FindacampaignComponent } from './findacampaign.component';

describe('FindacampaignComponent', () => {
  let component: FindacampaignComponent;
  let fixture: ComponentFixture<FindacampaignComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FindacampaignComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FindacampaignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
