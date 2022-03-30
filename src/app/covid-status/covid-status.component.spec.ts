import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CovidStatusComponent } from './covid-status.component';

describe('CovidStatusComponent', () => {
  let component: CovidStatusComponent;
  let fixture: ComponentFixture<CovidStatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CovidStatusComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CovidStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
