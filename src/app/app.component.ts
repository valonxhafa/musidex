import { Component, ChangeDetectorRef, OnInit } from '@angular/core';

import {
  AngularFirestore,
  AngularFirestoreCollection
} from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { FormControl } from '@angular/forms';
import { ArtistsService } from './services/artists.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ArtistsService]
})

export class AppComponent implements OnInit {
  opened: boolean;
  title = 'Musidex';



  constructor(private afs: AngularFirestore, private artistsService: ArtistsService) {
  }

  ngOnInit() {
  }
}
