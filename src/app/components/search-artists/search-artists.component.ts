import { Component, OnInit } from '@angular/core';
import 'rxjs/add/operator/map';
import { FormControl } from '@angular/forms';
import { ArtistsService } from '../../services/artists.service';
import { Artist } from '../../models/artist';
import {Observable} from 'rxjs/Observable';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-search-artists',
  templateUrl: './search-artists.component.html',
  styleUrls: ['./search-artists.component.css'],
  providers: [ArtistsService]
})
export class SearchArtistsComponent implements OnInit {
  private _searchArtistCtrl = new FormControl();
  artists: Artist[];
  filteredOptions: Observable<Artist[]>;
  likedB: Boolean = false;
  loading = false;

  constructor(public artistsService: ArtistsService, private route: ActivatedRoute) {
    // this.route.params.subscribe( params => console.log(params) );
  }

  ngOnInit() {
    this.getArtists();
  }

  liked (artist: Artist) {
    artist.liked = !artist.liked;
    this.artistsService.updateLikes(artist);
  }

  getArtists() {
    this.artistsService.getArtists().subscribe(res => {
      this.artists = res;
    });
  }


  get searchArtistCtrl(): FormControl {
    return this._searchArtistCtrl;
  }
}
