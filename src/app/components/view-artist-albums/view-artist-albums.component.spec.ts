import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewArtistAlbumsComponent } from './view-artist-albums.component';

describe('ViewArtistAlbumsComponent', () => {
  let component: ViewArtistAlbumsComponent;
  let fixture: ComponentFixture<ViewArtistAlbumsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewArtistAlbumsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewArtistAlbumsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
