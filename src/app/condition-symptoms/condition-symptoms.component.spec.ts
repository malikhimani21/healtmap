import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConditionSymptomsComponent } from './condition-symptoms.component';

describe('ConditionSymptomsComponent', () => {
  let component: ConditionSymptomsComponent;
  let fixture: ComponentFixture<ConditionSymptomsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConditionSymptomsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConditionSymptomsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
