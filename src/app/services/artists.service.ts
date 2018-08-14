import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import { AngularFireObject, AngularFireList, AngularFireDatabase } from 'angularFire2/database';
import { Artist } from '../models/artist';
import { AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection } from 'angularfire2/firestore';

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

    this.getArtist();
  }

  public getArtists() {
    return this.artists;
  }

  getArtist() {
    this.artistCollection.doc('M7mvTtd5TsBpqc1CsNUI').ref.get().then(function(doc) {
      if (doc.exists) {
        console.log('Document data:', doc.data());
      } else {
        console.log('No such document!');
      }
    }).catch(function(error) {
      console.log('Error getting document:', error);
    });
  }

  deleteArtist(artist: Artist) {
    this.artistCollection.doc(artist.$key).delete();
  }

}
