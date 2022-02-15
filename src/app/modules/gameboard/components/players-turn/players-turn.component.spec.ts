import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayersTurnComponent } from './players-turn.component';

describe('PlayersTurnComponent', () => {
  let component: PlayersTurnComponent;
  let fixture: ComponentFixture<PlayersTurnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlayersTurnComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayersTurnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
