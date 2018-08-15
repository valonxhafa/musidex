import { Component, OnInit } from '@angular/core';
import { ArtistsService } from '../../services/artists.service';
import { Artist } from '../../models/artist';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'app-view-artist',
  templateUrl: './view-artist.component.html',
  styleUrls: ['./view-artist.component.css'],
  providers: [ArtistsService]
})
export class ViewArtistComponent implements OnInit {

  artist: Artist;

  constructor(public artistsService: ArtistsService) { }

  ngOnInit() {
    this.getArtist();
  }

  getArtist() {
    this.artistsService.getArtist('ulelHuzk7Ck6pld7lmcF').subscribe(res => {
      this.artist = res;
    });
  }

}
