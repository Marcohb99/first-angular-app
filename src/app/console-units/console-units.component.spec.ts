import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsoleUnitsComponent } from './console-units.component';

describe('ConsoleUnitsComponent', () => {
  let component: ConsoleUnitsComponent;
  let fixture: ComponentFixture<ConsoleUnitsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConsoleUnitsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ConsoleUnitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
