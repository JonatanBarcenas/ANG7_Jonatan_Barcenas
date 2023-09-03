import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JonatanComponent } from './jonatan.component';

describe('JonatanComponent', () => {
  let component: JonatanComponent;
  let fixture: ComponentFixture<JonatanComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [JonatanComponent]
    });
    fixture = TestBed.createComponent(JonatanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
