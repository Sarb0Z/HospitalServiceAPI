import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowVisitsComponent } from './show-visits.component';

describe('ShowVisitsComponent', () => {
  let component: ShowVisitsComponent;
  let fixture: ComponentFixture<ShowVisitsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowVisitsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowVisitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
