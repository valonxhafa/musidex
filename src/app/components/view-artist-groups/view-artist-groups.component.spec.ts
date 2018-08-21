import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewArtistGroupsComponent } from './view-artist-groups.component';

describe('ViewArtistGroupsComponent', () => {
  let component: ViewArtistGroupsComponent;
  let fixture: ComponentFixture<ViewArtistGroupsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewArtistGroupsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewArtistGroupsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
