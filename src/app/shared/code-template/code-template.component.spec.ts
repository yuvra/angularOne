import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CodeTemplateComponent } from './code-template.component';

describe('CodeTemplateComponent', () => {
  let component: CodeTemplateComponent;
  let fixture: ComponentFixture<CodeTemplateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CodeTemplateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CodeTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
