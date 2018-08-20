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

  public getAlbums(id: string) {

    this.albumCollection = this.afs.collection<Album>('Albums', ref => {
      return ref.where('artistID', '==' , id);
    });

    // this.albumCollection = this.afs.collection<Album>('Albums');
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

  addAlbums() {
    this.albumCollection.add({ artistID: '', genres: ['Pop', 'Rock', 'R&B'], name: 'Dangerous',
    tracks: ['Jam', 'Wou Wanna Trip on Me', 'In the Closet', 'She Drives Me Wild',
     'Remember the Time', 'Can\'t Let Her Get Away',
     'Heal the World', 'Black or White', 'Who Is It',
     'Give In to Me', 'Will You Be There', 'Keep the Faith', 'Gone Too Soon', 'Dangerous'], year: 1991, length: 7303});

     this.albumCollection.add({ artistID: '', genres: ['Pop', 'Dance', 'Funk', 'Rock'], name: 'Bad',
     tracks: ['Bad', 'The Way You Make Me Feel', 'Speed Demon', 'Liberian Girl',
      'Just Good Friends', 'Another Part of Me',
      'Man in the Mirror', 'I Just Can\'t Stop Loving You', 'Dirty Diana',
      'Smooth Criminal', 'Leave Me Alone'], year: 1987, length: 4816});

      this.albumCollection.add({ artistID: '', genres: ['Pop', 'Post-disco', 'Rock'], name: 'Thriller',
      tracks: ['Wanna Be Startin\' Somethin\'', 'Baby Be Mine', 'The Girl Is Mine',
       'Thriller', 'Beat It', 'Billie Jean', 'Human Nature', 'P.Y.T. (Pretty Young Thing)',
       'The Lady In My Life'], year: 1991, length: 4219});

}

}
