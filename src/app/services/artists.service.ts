import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import { AngularFireObject, AngularFireList, AngularFireDatabase } from 'angularFire2/database';
import { Artist } from '../models/artist';
import { AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection } from '../../../node_modules/angularfire2/firestore';

@Injectable()
export class ArtistsService {

  private basePath = '/Artists';

  artistCollection: AngularFirestoreCollection<Artist>;
  artists: Observable<Artist[]>;
  artistDocument: AngularFirestoreDocument<Artist>;

  constructor(private afs: AngularFirestore) {
    this.artistCollection = afs.collection<Artist>('Artists');

    this.artists = this.artistCollection.snapshotChanges().map(changes => {
      return changes.map(a => {
        const data = a.payload.doc.data() as Artist;
        data.$key = a.payload.doc.id;
        return data;
      });
    });

   // this.artists = this.artistCollection.valueChanges();
  }

  public getArtists() {
    return this.artists;
  }

}
