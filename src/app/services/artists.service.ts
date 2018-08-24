import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import { Artist } from '../models/artist';
import { AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection } from 'angularfire2/firestore';

@Injectable()
export class ArtistsService {

  private basePath = '/Artists';

  artistCollection: AngularFirestoreCollection<Artist>;
  artists: Observable<Artist[]>;

  artistDocument: AngularFirestoreDocument<Artist>;
  artist: Observable<Artist>;

  items$: Observable<Artist[]>;
  sizeFilter$: BehaviorSubject<string|null>;

  constructor(private afs: AngularFirestore) {

  }

  public getArtists() {

    this.artistCollection = this.afs.collection('Artists', ref => {
      return ref.orderBy('likes', 'desc').limit(8);
    // return ref.where('artistname', '==', 'Madonna');
    });

    this.artists = this.artistCollection.snapshotChanges().map(changes => {
      return changes.map(a => {
        const data = a.payload.doc.data() as Artist;
        data.$key = a.payload.doc.id;
        return data;
      });
    });

    return this.artists;
  }

  public getArtistsFiltered() {
    this.artistCollection = this.afs.collection('Artists', ref => {
      return ref.where('artistname', '==', 'Madonna');
    });

    this.artists = this.artistCollection.snapshotChanges().map(changes => {
      return changes.map(a => {
        const data = a.payload.doc.data() as Artist;
        data.$key = a.payload.doc.id;
        return data;
      });
    });

    return this.artists;
  }

  updateLikes(artist: Artist) {
    this.artistDocument = this.afs.doc('Artists/' + artist.$key);
    if (artist.liked) {
      this.artistDocument.update({likes: (artist.likes + 1), liked: true});
    } else {
      this.artistDocument.update({likes: (artist.likes - 1), liked: false});
    }

  }

  getArtist(id: any) {
    this.artistDocument = this.afs.doc('Artists/' + id);
    this.artist = this.artistDocument.valueChanges();
    return this.artist;
  }

  deleteArtist(artist: Artist) {
    this.artistCollection.doc(artist.$key).delete();
  }

}
