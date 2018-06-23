import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StartacampaignComponent } from './startacampaign.component';

describe('StartacampaignComponent', () => {
  let component: StartacampaignComponent;
  let fixture: ComponentFixture<StartacampaignComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StartacampaignComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StartacampaignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
