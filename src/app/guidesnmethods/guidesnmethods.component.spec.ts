import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GuidesnmethodsComponent } from './guidesnmethods.component';

describe('GuidesnmethodsComponent', () => {
  let component: GuidesnmethodsComponent;
  let fixture: ComponentFixture<GuidesnmethodsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GuidesnmethodsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GuidesnmethodsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
