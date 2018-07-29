import { Component, ChangeDetectorRef, OnInit } from '@angular/core';

import {
  AngularFirestore,
  AngularFirestoreCollection
} from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { FormControl } from '@angular/forms';
import { ArtistsService } from '../../services/artists.service';

interface Artist {
  artistname: string;
  forname: string;
  name: string;
}

@Component({
  selector: 'app-search-artists',
  templateUrl: './search-artists.component.html',
  styleUrls: ['./search-artists.component.css'],
  providers: [ArtistsService]
})
export class SearchArtistsComponent implements OnInit {
  public options: string[] = ['One', 'Two', 'Three'];

  artistsCollection: AngularFirestoreCollection<Artist>;
  artistsObs: Observable<Artist[]>;
  stateCtrl = new FormControl();

  constructor(private afs: AngularFirestore) {
    this.artistsCollection = this.afs.collection('Artists');
    this.artistsObs = this.artistsCollection.valueChanges();
  }

  ngOnInit() {
  }

  public getArtists() {
  }

}
