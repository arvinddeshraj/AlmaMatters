import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatToolbarModule } from '@angular/material/toolbar';
import { DashboardComponent } from './dashboard.component';
import { TopBarComponent } from '../../components/top-bar/top-bar.component';
import { LeftbarComponent } from '../../components/leftbar/leftbar.component';
import { LeftbarPostComponent } from '../../components/leftbar-post/leftbar-post.component';
import { MatIconModule } from '@angular/material/icon';
import { MainDashboardComponent } from '../../components/main-dashboard/main-dashboard.component';

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        MatToolbarModule,
        MatIconModule
      ],
      declarations: [ DashboardComponent, TopBarComponent, LeftbarComponent, LeftbarPostComponent, MainDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
