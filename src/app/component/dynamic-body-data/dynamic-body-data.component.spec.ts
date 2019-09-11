import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicBodyDataComponent } from './dynamic-body-data.component';

describe('DynamicBodyDataComponent', () => {
  let component: DynamicBodyDataComponent;
  let fixture: ComponentFixture<DynamicBodyDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DynamicBodyDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DynamicBodyDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
