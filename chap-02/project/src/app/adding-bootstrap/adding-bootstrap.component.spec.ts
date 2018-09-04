import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddingBootstrapComponent } from './adding-bootstrap.component';

describe('AddingBootstrapComponent', () => {
  let component: AddingBootstrapComponent;
  let fixture: ComponentFixture<AddingBootstrapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddingBootstrapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddingBootstrapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
