import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AvenueDetailComponent } from './avenue-detail.component';

describe('AvenueDetailComponent', () => {
  let component: AvenueDetailComponent;
  let fixture: ComponentFixture<AvenueDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AvenueDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AvenueDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
