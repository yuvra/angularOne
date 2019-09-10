import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SideNavMatComponent } from './side-nav-mat.component';

describe('SideNavMatComponent', () => {
  let component: SideNavMatComponent;
  let fixture: ComponentFixture<SideNavMatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SideNavMatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SideNavMatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
