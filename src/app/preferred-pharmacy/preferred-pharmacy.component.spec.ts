import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PreferredPharmacyComponent } from './preferred-pharmacy.component';

describe('PreferredPharmacyComponent', () => {
  let component: PreferredPharmacyComponent;
  let fixture: ComponentFixture<PreferredPharmacyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PreferredPharmacyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PreferredPharmacyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
