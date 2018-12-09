import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatDashboardComponent } from './chat-dashboard.component';

describe('ChatDashboardComponent', () => {
  let component: ChatDashboardComponent;
  let fixture: ComponentFixture<ChatDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChatDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
