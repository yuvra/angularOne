import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YourFirstAppComponent } from './your-first-app.component';

describe('YourFirstAppComponent', () => {
  let component: YourFirstAppComponent;
  let fixture: ComponentFixture<YourFirstAppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YourFirstAppComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YourFirstAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
