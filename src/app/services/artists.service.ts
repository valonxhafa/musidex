import { Injectable } from '@angular/core';
import { AngularFireList, AngularFireDatabase } from '../../../node_modules/angularFire2/database';

export interface Artist {
  artistname: string;
  forname: string;
  name: string;
}

@Injectable()
export class ArtistsService {

  artistList: AngularFireList<any>;

  constructor(private fb: AngularFireDatabase) {
  }

  getArtists() {
    this.artistList = this.fb.list('artists');
    return this.artistList;
  }

}
