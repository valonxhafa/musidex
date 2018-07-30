import { Component, ChangeDetectorRef, OnInit } from '@angular/core';

import {
  AngularFirestore,
  AngularFirestoreCollection
} from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { FormControl } from '@angular/forms';
import { ArtistsService } from '../../services/artists.service';
import { element } from 'protractor';
import { AngularFireDatabase } from '../../../../node_modules/angularFire2/database';
import { Artist } from '../../models/artist';

@Component({
  selector: 'app-search-artists',
  templateUrl: './search-artists.component.html',
  styleUrls: ['./search-artists.component.css'],
  providers: [ArtistsService]
})
export class SearchArtistsComponent implements OnInit {

  public options: string[] = ['One', 'Two', 'Three'];

  artists: Artist[];
  // private artistCollection: AngularFirestoreCollection<Artist>;


  constructor(public artistsService: ArtistsService) {
  }

  ngOnInit() {
    this.artistsService.getArtists().subscribe(res => {
      this.artists = res;
    });

  }

}
