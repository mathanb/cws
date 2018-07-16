import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GivecleanwaterComponent } from './givecleanwater.component';

describe('GivecleanwaterComponent', () => {
  let component: GivecleanwaterComponent;
  let fixture: ComponentFixture<GivecleanwaterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GivecleanwaterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GivecleanwaterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
