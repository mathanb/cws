import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GiveonceComponent } from './giveonce.component';

describe('GiveonceComponent', () => {
  let component: GiveonceComponent;
  let fixture: ComponentFixture<GiveonceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GiveonceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GiveonceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
