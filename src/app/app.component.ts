import { Component, ChangeDetectorRef, OnInit } from '@angular/core';

import {
  AngularFirestore,
  AngularFirestoreDocument,
  AngularFirestoreCollection
} from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

interface Artist {
  name: string;
  forname: string;
  artistname: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  opened: boolean;
  title = 'Musidex';
  artistsCollection: AngularFirestoreCollection<Artist>;
  artists: Observable<Artist[]>;


  constructor(private afs: AngularFirestore) {}

  ngOnInit() {
    this.artistsCollection = this.afs.collection('artists');
    this.artists = this.artistsCollection.valueChanges();
  }
}
