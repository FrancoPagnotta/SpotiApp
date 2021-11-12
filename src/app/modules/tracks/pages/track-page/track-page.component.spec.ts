import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TrackPageComponent } from './track-page.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';


describe('TrackPageComponent', () => {
  let component: TrackPageComponent;
  let fixture: ComponentFixture<TrackPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [ TrackPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrackPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
