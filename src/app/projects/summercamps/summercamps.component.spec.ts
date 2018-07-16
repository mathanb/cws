import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SummercampsComponent } from './summercamps.component';

describe('SummercampsComponent', () => {
  let component: SummercampsComponent;
  let fixture: ComponentFixture<SummercampsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SummercampsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SummercampsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
