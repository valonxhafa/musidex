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
  artist: Observable<Artist>;

  constructor(private afs: AngularFirestore) {

  }

  public getArtists() {
    this.artistCollection = this.afs.collection<Artist>('Artists');
    this.artists = this.artistCollection.snapshotChanges().map(changes => {
      return changes.map(a => {
        const data = a.payload.doc.data() as Artist;
        data.$key = a.payload.doc.id;
        return data;
      });
    });

    return this.artists;
  }

  getArtist(id: any) {
    this.artistDocument = this.afs.doc('Artists/' + id);
    this.artist = this.artistDocument.valueChanges();
    return this.artist;
    // this.artistCollection.doc(id).ref.get().then(function(doc) {
    //   if (doc.exists) {
    //     console.log('Document data:', doc.data());
    //     this.artistDocument = doc.data();
    //   } else {
    //     console.log('No such document!');
    //   }
    // }).catch(function(error) {
    //   console.log('Error getting document:', error);
    // });
  }

  deleteArtist(artist: Artist) {
    this.artistCollection.doc(artist.$key).delete();
  }

}
