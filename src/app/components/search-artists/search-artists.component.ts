import { Component, OnInit } from '@angular/core';
import 'rxjs/add/operator/map';
import { FormControl } from '@angular/forms';
import { ArtistsService } from '../../services/artists.service';
import { Artist } from '../../models/artist';
import { Observable } from 'rxjs/Observable';
import { ActivatedRoute } from '@angular/router';
import { startWith } from 'rxjs/operators/startWith';
import { map } from 'rxjs/operators/map';
import {MatSnackBar} from '@angular/material';
import {Router} from '@angular/router';

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

  constructor(public artistsService: ArtistsService, private route: ActivatedRoute, public snackBar: MatSnackBar, private router: Router) {
    this.filteredArtists = this._searchArtistCtrl.valueChanges
      .pipe(
        startWith(null),
        map(artistname => this.filterStates(artistname))
      );
  }

  searchArtist(artist: Artist) {
    this.router.navigate(['artist', { id: artist.$key}]);
  }

  openSnackBar(artistname: string) {
    this.snackBar.open(artistname + ' added to favorites!', '', { duration: 1000});
  }

  filterStates(val: string) {
    return val ? this.artists.filter(s => s.artistname.toLowerCase().indexOf(val.toString().toLowerCase()) === 0)
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
