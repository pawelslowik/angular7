import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodosPanelComponent } from './todos-panel.component';

describe('TodosPanelComponent', () => {
  let component: TodosPanelComponent;
  let fixture: ComponentFixture<TodosPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TodosPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodosPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
