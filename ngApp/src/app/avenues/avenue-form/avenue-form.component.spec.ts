import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AvenueFormComponent } from './avenue-form.component';

describe('AvenueFormComponent', () => {
  let component: AvenueFormComponent;
  let fixture: ComponentFixture<AvenueFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AvenueFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AvenueFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
