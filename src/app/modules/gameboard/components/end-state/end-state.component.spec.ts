import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EndStateComponent } from './end-state.component';

describe('EndStateComponent', () => {
  let component: EndStateComponent;
  let fixture: ComponentFixture<EndStateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EndStateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EndStateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
