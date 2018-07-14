import { Component, ChangeDetectorRef, OnInit } from '@angular/core';

import {
  AngularFirestore,
  AngularFirestoreCollection
} from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

interface Artist {
  artistname: string;
  forname: string;
  name: string;
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
  artists$: Observable<Artist[]>;


  constructor(private afs: AngularFirestore) {
    this.artistsCollection = this.afs.collection('Artists');
    this.artists$ = this.artistsCollection.valueChanges();
  }

  ngOnInit() {

  }
}
