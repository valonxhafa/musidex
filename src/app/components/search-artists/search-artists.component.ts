import { Component, OnInit } from '@angular/core';
import 'rxjs/add/operator/map';
import { FormControl } from '@angular/forms';
import { ArtistsService } from '../../services/artists.service';
import { Artist } from '../../models/artist';
import { Observable } from 'rxjs/Observable';
import { ActivatedRoute } from '@angular/router';
import { startWith } from 'rxjs/operators/startWith';
import { map } from 'rxjs/operators/map';

@Component({
  selector: 'app-search-artists',
  templateUrl: './search-artists.component.html',
  styleUrls: ['./search-artists.component.css'],
  providers: [ArtistsService]
})
export class SearchArtistsComponent implements OnInit {
  _searchArtistCtrl: FormControl = new FormControl();
  artists: Artist[];
  filteredArtists: Observable<Artist[]>;
  likedB: Boolean = false;
  loading = false;

  ngOnInit() {
    this.getArtists();
  }

  constructor(public artistsService: ArtistsService, private route: ActivatedRoute) {
    this.filteredArtists = this._searchArtistCtrl.valueChanges
      .pipe(
        startWith(null),
        map(artistname => this.filterStates(artistname))
      );
  }
  // this.route.params.subscribe( params => console.log(params) );


  filterStates(val: string) {
    return val ? this.artists.filter(s => s.artistname.toLowerCase().indexOf(val.toLowerCase()) === 0)
      : this.artists;
  }

  displayFn(val: Artist) {
    return val ? val.artistname : val;
  }













  liked(artist: Artist) {
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
