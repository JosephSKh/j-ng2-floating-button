import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JNg2FloatingButtonComponent } from './j-ng2-floating-button.component';

describe('JNg2FloatingButtonComponent', () => {
  let component: JNg2FloatingButtonComponent;
  let fixture: ComponentFixture<JNg2FloatingButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JNg2FloatingButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JNg2FloatingButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
