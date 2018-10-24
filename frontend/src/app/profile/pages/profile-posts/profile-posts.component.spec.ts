import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilePostsComponent } from './profile-posts.component';

describe('ProfilePostsComponent', () => {
  let component: ProfilePostsComponent;
  let fixture: ComponentFixture<ProfilePostsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfilePostsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfilePostsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
