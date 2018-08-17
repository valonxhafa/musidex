import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import { AngularFireObject, AngularFireList, AngularFireDatabase } from 'angularFire2/database';
import { Artist } from '../models/artist';
import { AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Album } from '../models/album';

@Injectable()
export class AlbumsService {

  albumCollection: AngularFirestoreCollection<Album>;
  albums: Observable<Album[]>;

  albumDocument: AngularFirestoreDocument<Album>;
  album: Observable<Album>;

  constructor(private afs: AngularFirestore) {

  }

  public getAlbums() {
    this.albumCollection = this.afs.collection<Album>('Albums');
    this.albums = this.albumCollection.snapshotChanges().map(changes => {
      return changes.map(a => {
        const data = a.payload.doc.data() as Album;
        data.$key = a.payload.doc.id;
        return data;
      });
    });

    return this.albums;
  }

  getAlbum(artistId: any) {
    this.albumDocument = this.afs.doc('Albums/' + artistId);
    this.album = this.albumDocument.valueChanges();
    return this.album;
  }

  deleteAlbum(artist: Album) {
    this.albumCollection.doc(artist.$key).delete();
  }

}
