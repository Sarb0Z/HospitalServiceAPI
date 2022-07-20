import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditVisitComponent } from './add-edit-visit.component';

describe('AddEditVisitComponent', () => {
  let component: AddEditVisitComponent;
  let fixture: ComponentFixture<AddEditVisitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditVisitComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddEditVisitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
