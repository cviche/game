import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StartRulesButtonComponent } from './start-rules-button.component';

describe('StartRulesButtonComponent', () => {
  let component: StartRulesButtonComponent;
  let fixture: ComponentFixture<StartRulesButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StartRulesButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StartRulesButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
