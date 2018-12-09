import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeftbarComponent } from './leftbar.component';
import { MatIconModule } from '@angular/material/icon';
import { LeftbarPostComponent } from '../leftbar-post/leftbar-post.component';
import { CommonModule } from '@angular/common';

describe('LeftbarComponent', () => {
  let component: LeftbarComponent;
  let fixture: ComponentFixture<LeftbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports : [
        MatIconModule,
        CommonModule
      ],
      declarations: [ LeftbarComponent, LeftbarPostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeftbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
