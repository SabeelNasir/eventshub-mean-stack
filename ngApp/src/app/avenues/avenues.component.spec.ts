import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AvenuesComponent } from './avenues.component';

describe('AvenuesComponent', () => {
  let component: AvenuesComponent;
  let fixture: ComponentFixture<AvenuesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AvenuesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AvenuesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
