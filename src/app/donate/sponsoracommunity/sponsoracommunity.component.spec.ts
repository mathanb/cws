import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SponsoracommunityComponent } from './sponsoracommunity.component';

describe('SponsoracommunityComponent', () => {
  let component: SponsoracommunityComponent;
  let fixture: ComponentFixture<SponsoracommunityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SponsoracommunityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SponsoracommunityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
