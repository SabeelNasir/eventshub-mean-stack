import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListAvenueComponent } from './list-avenue.component';

describe('ListAvenueComponent', () => {
  let component: ListAvenueComponent;
  let fixture: ComponentFixture<ListAvenueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListAvenueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListAvenueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
