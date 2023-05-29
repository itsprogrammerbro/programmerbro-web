import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GtagComponent } from './gtag.component';

describe('GtagComponent', () => {
  let component: GtagComponent;
  let fixture: ComponentFixture<GtagComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GtagComponent]
    });
    fixture = TestBed.createComponent(GtagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
