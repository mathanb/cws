import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GivemonthlyComponent } from './givemonthly.component';

describe('GivemonthlyComponent', () => {
  let component: GivemonthlyComponent;
  let fixture: ComponentFixture<GivemonthlyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GivemonthlyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GivemonthlyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
