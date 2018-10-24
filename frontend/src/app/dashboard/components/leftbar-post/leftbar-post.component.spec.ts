import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeftbarPostComponent } from './leftbar-post.component';
import { CommonModule } from '@angular/common';

describe('LeftbarPostComponent', () => {
  let component: LeftbarPostComponent;
  let fixture: ComponentFixture<LeftbarPostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        CommonModule
      ],
      declarations: [ LeftbarPostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeftbarPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
