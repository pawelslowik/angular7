import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoActionButtonsComponent } from './todo-action-buttons.component';

describe('TodoActionButtonsComponent', () => {
  let component: TodoActionButtonsComponent;
  let fixture: ComponentFixture<TodoActionButtonsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TodoActionButtonsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoActionButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
