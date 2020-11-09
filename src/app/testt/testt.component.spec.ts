import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TesttComponent } from './testt.component';

describe('TesttComponent', () => {
  let component: TesttComponent;
  let fixture: ComponentFixture<TesttComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TesttComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TesttComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
