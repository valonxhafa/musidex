import { Component, OnInit } from '@angular/core';
import { ArtistsService } from '../../services/artists.service';
import { Artist } from '../../models/artist';
import {Observable} from 'rxjs/Observable';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-view-artist',
  templateUrl: './view-artist.component.html',
  styleUrls: ['./view-artist.component.css'],
  providers: [ArtistsService]
})
export class ViewArtistComponent implements OnInit {

  id: string;
  private sub: any;
  artist: Artist;

  constructor(public artistsService: ArtistsService, private route: ActivatedRoute) { }

  ngOnInit() {

    this.sub = this.route.params.subscribe(params => {
      this.id = params['id']; });
    this.getArtist();
  }

  getArtist() {
    this.artistsService.getArtist(this.id).subscribe(res => {
      this.artist = res;
    });
  }


}
